const esbuild = require("esbuild");

esbuild
  .build({
    bundle: true,
    chunkNames: "chunks/[name]-[hash]",
    define: { "process.env.NODE_ENV": "production" },
    entryPoints: ["index.js"],
    format: "esm",
    minify: true,
    outdir: "public",
    splitting: true,
  })
  .catch(() => process.exit(1));
