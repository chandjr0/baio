import { Link } from "@tanstack/react-router";
import { brand } from "@/data/brand";
import { navigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-soft-black px-5 py-14 text-primary-foreground md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-4 gap-10 border-b border-primary-foreground/20 pb-14 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-4">
            <Link
              to="/"
              className="inline-block font-display text-3xl font-semibold transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage"
            >
              BAIO<span className="text-sage">/</span>HACK
            </Link>
            <p className="mt-3 text-sm text-primary-foreground/60">
              The calm layer beneath the noise.
            </p>
          </div>

          <nav className="col-span-4 lg:col-span-3" aria-label="Footer navigation">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary-foreground/50">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-200 hover:text-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-4 flex flex-col gap-3 md:col-start-5 lg:col-span-4 lg:col-start-9">
            {brand.socials.map((social) => {
              const isEmail = social.href.startsWith("mailto:");
              return (
                <a
                  key={social.label}
                  href={social.href}
                  {...(isEmail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className="group grid grid-cols-[1fr_auto] border-b border-primary-foreground/20 pb-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-200 hover:text-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                  aria-label={`${social.label}: ${social.handle}`}
                >
                  <span>{social.label}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    {social.handle}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 pt-8 text-[10px] leading-relaxed text-primary-foreground/55 md:grid-cols-3">
          <p>BaioHack © 2026 — Smarter Health, guided by you + AI</p>
          <p>
            We only use your email for updates and early access. No data sales, ever. Unsubscribe
            anytime.
          </p>
          <p className="md:text-right">
            Powered by{" "}
            <a
              href="https://www.involiq.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground underline underline-offset-4 transition-colors duration-200 hover:text-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
            >
              Involiq
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
