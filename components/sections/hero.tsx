"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Download } from "lucide-react"
import { contactData } from "@/data/profile"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 via-transparent to-transparent" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #475a77 1px, transparent 1px), 
                           linear-gradient(to bottom, #475a77 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center rounded-full border border-navy-600 bg-navy-900/50 px-4 py-1.5 text-sm text-navy-300 backdrop-blur-sm"
            >
              <span className="mr-2 h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Available for hire
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              <span className="text-balance">Hi, I&apos;m </span>
              <span className="bg-gradient-to-r from-navy-400 via-navy-300 to-slate-400 bg-clip-text text-transparent">
                Juan Manuel
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-xl font-medium text-navy-400 sm:text-2xl"
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Passionate about building exceptional digital experiences with modern 
              technologies. Specialized in PHP, WordPress, React, and Next.js with 
              a focus on performance and user experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy-600 px-6 py-3 text-base font-medium text-white transition-all hover:bg-navy-500 sm:w-auto"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-navy-600 bg-transparent px-6 py-3 text-base font-medium text-foreground transition-all hover:bg-navy-800 sm:w-auto"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center justify-center gap-4 lg:justify-start"
            >
              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-navy-800 hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-navy-800 hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <span className="h-6 w-px bg-border" />
              <a
                href="/foto-cv.jpg"
                download
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative h-80 w-80 sm:h-96 sm:w-96">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-navy-700/50" />
              <div className="absolute -inset-4 rounded-full border border-navy-800/30" />
              <div className="absolute -inset-8 rounded-full border border-navy-900/20" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-navy-600/20 via-transparent to-navy-400/10 blur-2xl" />
              
              {/* Image container */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-navy-600/50 bg-navy-900">
                <Image
                  src="/portfolio.png"
                  alt="Juan Manuel Grehuello"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
