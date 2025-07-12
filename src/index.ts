import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

if (Bun.env.NODE_ENV === "production") {
  app.use(
    "/*",
    serveStatic({
      root: "./dist",
      rewriteRequestPath: (p) => (p === "/" ? "/index.html" : p),
    }),
  );
}

// Example API route
app.get("/api/hello", (c) => c.json({ message: "Hello from Hono" }));

console.log("🚀 Server listening on http://localhost:3000");

Bun.serve({
  fetch: app.fetch,
  port: 3000,
});
