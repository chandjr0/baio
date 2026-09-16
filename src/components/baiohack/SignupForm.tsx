import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SignupForm({ inverse = false }: { inverse?: boolean }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-16 items-center gap-4 border-y border-current py-4" role="status">
        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-current">
          <Check className="size-4" />
        </span>
        <div>
          <p className="font-display text-lg font-semibold">You’re on the list.</p>
          <p className="text-sm opacity-70">We’ll be in touch when your early wave is ready.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="w-full" aria-label="Join the early wave">
      <div
        className={`grid grid-cols-[minmax(0,1fr)_auto] border-b ${inverse ? "border-primary-foreground/40" : "border-foreground"}`}
      >
        <label htmlFor={`email-${inverse ? "final" : "early"}`} className="sr-only">
          Email address
        </label>
        <Input
          id={`email-${inverse ? "final" : "early"}`}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="YOUR EMAIL ADDRESS"
          aria-describedby={error ? `error-${inverse ? "final" : "early"}` : undefined}
          className="h-16 min-w-0 rounded-none border-0 px-0 font-mono text-xs tracking-widest shadow-none focus-visible:ring-0"
        />
        <Button
          type="submit"
          variant="ghost"
          className="group h-16 shrink-0 rounded-none px-4 font-mono text-xs tracking-widest transition-colors duration-200 hover:bg-transparent hover:text-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          JOIN{" "}
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Button>
      </div>
      {error && (
        <p
          id={`error-${inverse ? "final" : "early"}`}
          className="mt-3 font-mono text-xs text-destructive"
        >
          {error}
        </p>
      )}
    </form>
  );
}
