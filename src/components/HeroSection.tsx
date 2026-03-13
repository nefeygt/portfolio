import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
          Software Engineer
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Building digital products
          <br />
          <span className="text-muted">with precision & purpose.</span>
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          I design and build performant web applications with modern
          technologies. Currently open to new opportunities across Europe.
        </p>

        {/* Social links */}
        <div className="mb-16 flex items-center justify-center gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-border p-3 text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-border p-3 text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:hello@example.com"
            aria-label="Email"
            className="rounded-full border border-border p-3 text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll hint */}
        <a
          href="#experience"
          className="inline-flex animate-bounce text-muted transition-colors hover:text-foreground"
          aria-label="Scroll to experience"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
