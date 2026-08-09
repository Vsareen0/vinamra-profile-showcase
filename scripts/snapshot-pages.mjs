// Snapshots the built app into static HTML for GitHub Pages.
// Runs the built Cloudflare worker locally (wrangler dev) and saves each route's
// server-rendered HTML into dist/client/<route>/index.html.
import { spawn } from "node:child_process";
import { mkdir, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";

const ROUTES = [
  "/",
  "/about",
  "/experience",
  "/projects",
  "/certifications",
  "/contact",
];

const PORT = Number(process.env.SNAPSHOT_PORT || 8788);
const SERVER_DIR = path.resolve("dist/server");
const CLIENT_DIR = path.resolve("dist/client");

const wrangler = spawn(
  "npx",
  [
    "wrangler",
    "dev",
    "-c",
    "wrangler.json",
    "--port",
    String(PORT),
    "--ip",
    "127.0.0.1",
  ],
  { cwd: SERVER_DIR, stdio: "inherit" },
);

const stop = () => {
  try {
    wrangler.kill("SIGTERM");
  } catch {
    /* already gone */
  }
};
process.on("exit", stop);

async function waitForServer() {
  for (let i = 0; i < 120; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/`);
      if (res.ok) return;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error("wrangler dev did not become ready in time");
}

await waitForServer();

for (const route of ROUTES) {
  const res = await fetch(`http://127.0.0.1:${PORT}${route}`);
  if (!res.ok) throw new Error(`${route} returned ${res.status}`);
  const html = await res.text();
  const outDir =
    route === "/" ? CLIENT_DIR : path.join(CLIENT_DIR, route.slice(1));
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "index.html"), html, "utf8");
  console.log(`snapshotted ${route}`);
}

// SPA fallback for unknown paths, and stop Jekyll from eating _-prefixed files.
await copyFile(
  path.join(CLIENT_DIR, "index.html"),
  path.join(CLIENT_DIR, "404.html"),
);
await writeFile(path.join(CLIENT_DIR, ".nojekyll"), "", "utf8");

stop();
process.exit(0);
