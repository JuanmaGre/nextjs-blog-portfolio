"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { aboutMe } from "@/data/profile"

export function About() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground">
                My Journey
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {aboutMe.intro}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {aboutMe.description}
              </p>
            </div>
          </motion.div>

          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground">
                Strengths
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                What I bring to every project
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {aboutMe.strengths.map((strength, index) => (
                  <motion.li
                    key={strength}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 rounded-lg bg-navy-900/50 px-4 py-3"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-navy-400" />
                    <span className="text-sm font-medium text-foreground">
                      {strength}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { value: "4+", label: "Years Experience" },
                { value: "20+", label: "Projects" },
                { value: "15+", label: "Happy Clients" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="rounded-xl border border-border/50 bg-card p-4 text-center"
                >
                  <p className="text-2xl font-bold text-navy-400">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
