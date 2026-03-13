import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-[#08080c] px-6 py-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Let&apos;s build something great together.
        </h2>

        <a
          href="mailto:n.efeyigit@outlook.com"
          className="text-sm text-accent transition-colors hover:text-accent-hover"
        >
          n.efeyigit@outlook.com
        </a>

        <div className="mt-6 flex items-center justify-center gap-5">
          <a
            href="https://github.com/nefeygt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/nazımefeyiğit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:n.efeyigit@outlook.com"
            aria-label="Email"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
