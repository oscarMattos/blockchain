const esbuild = require("esbuild");

esbuild
  .build({
    bundle: true,
    entryPoints: ["index.js"],
    define: { "process.env.NODE_ENV": "development" },
    outfile: "dev.bundle.js",
    watch: {
      onRebuild(error, result) {
        error
          ? console.error("watch build failed:", error)
          : console.log("watch build succeeded:", result);
      },
    },
  })
  .then((result) => {
    console.log(`${JSON.stringify(result)}`)
    console.log("watching...");
  })
  .catch(() => process.exit(1));
