import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportRuntimeError } from "../lib/error-reporting";
import { SITE_URL } from "../data/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <main id="main-content" className="flex flex-1 items-center justify-center px-5 py-24">
        <div className="max-w-md text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            404
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-foreground md:text-7xl">
            Page not found
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex h-12 items-center justify-center rounded-none bg-primary px-6 font-mono text-[10px] tracking-[0.12em] text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Go home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportRuntimeError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex flex-1 items-center justify-center px-5 py-24">
        <div className="max-w-md text-center">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            This page didn't load
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Something went wrong on our end. You can try refreshing or head back home.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                router.invalidate();
                reset();
              }}
              className="inline-flex h-11 items-center justify-center rounded-none bg-primary px-5 font-mono text-[10px] tracking-[0.12em] text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Try again
            </button>
            <Link
              to="/"
              className="inline-flex h-11 items-center justify-center rounded-none border border-foreground bg-transparent px-5 font-mono text-[10px] tracking-[0.12em] text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Go home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "BaioHack" },
      { name: "theme-color", content: "#f5f3ef" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "BaioHack" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@bAIohack" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&family=Inter+Tight:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.svg" },
      { rel: "sitemap", type: "application/xml", href: `${SITE_URL}/sitemap.xml` },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
