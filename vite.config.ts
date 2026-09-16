// TanStack Start preset — includes tanstackStart, viteReact, tailwindcss, tsConfigPaths, and nitro.
// Do not add those plugins manually or the app may break with duplicate plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
