import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight">
            Let&apos;s work together
          </h2>
          <p className="mx-auto max-w-md text-muted">
            I&apos;m currently open to new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out.
          </p>

          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Get in touch
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-foreground"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-foreground"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:hello@example.com"
              aria-label="Email"
              className="text-muted transition-colors hover:text-foreground"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
