import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { earlyAccessPath, navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-border/80 bg-background/95 shadow-[0_8px_30px_-12px_oklch(0_0_0/0.25)] backdrop-blur-xl"
          : "border-border/70 bg-background/90 backdrop-blur-xl",
      )}
    >
      <div className="mx-auto grid h-18 max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 md:px-10 lg:grid-cols-[auto_1fr_auto] lg:gap-8">
        <Link
          to="/"
          className="font-display text-xl font-bold transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          aria-label="BaioHack home"
        >
          BAIO<span className="text-sage">/</span>HACK
        </Link>

        <nav
          className="hidden items-center justify-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-200 hover:text-sage focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
                  active && "text-sage",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-sage transition-transform duration-300",
                    active && "scale-x-100",
                    !active && "group-hover:scale-x-100",
                  )}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            className="group h-10 rounded-none px-5 font-mono text-[10px] tracking-[0.12em] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Link to={earlyAccessPath}>
              Join the early wave
              <ArrowRight
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-none lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      <nav
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="px-5 py-8">
          {navigation.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "block border-b border-border py-4 font-display text-2xl transition-colors duration-200 hover:text-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  active && "text-sage",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Button asChild className="mt-6 h-12 w-full rounded-none font-mono text-xs">
            <Link to={earlyAccessPath}>
              Join the early wave
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
