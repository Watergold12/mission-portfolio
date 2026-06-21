// Pure Node.js + Express server that serves the production Vite build (dist/).
// Run: npm run build && npm start  -> http://localhost:3000

import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const DIST = path.join(__dirname, "dist");

app.use(express.static(DIST, { maxAge: "1h", index: "index.html" }));

// SPA fallback
app.get("*", (_req, res) => {
  res.sendFile(path.join(DIST, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Mission Control online → http://localhost:${PORT}`);
});
