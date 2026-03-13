"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          className="mb-4 text-sm font-medium tracking-widest text-accent uppercase"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Software Developer
        </motion.p>

        <motion.h1
          className="mb-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Nazım Efe Yiğit
        </motion.h1>

        <motion.p
          className="mb-6 text-lg text-muted sm:text-xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Bilkent University CTIS Senior Student.
        </motion.p>

        <motion.p
          className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          I am a software developer with a versatile background spanning
          full-stack web development, software testing, and game development. I
          specialize in turning complex problems into scalable, efficient
          solutions using modern technologies.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            View Projects
          </a>
          <a
            href="/Nazim_Efe_Yigit_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="mb-16 flex items-center justify-center gap-5"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <a
            href="https://github.com/nefeygt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-border p-3 text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/nazımefeyiğit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-border p-3 text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.a
          href="#experience"
          className="inline-flex animate-bounce text-muted transition-colors hover:text-foreground"
          aria-label="Scroll to experience"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={6}
        >
          <ArrowDown size={20} />
        </motion.a>
      </div>
    </section>
  );
}
