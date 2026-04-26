"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import { experiences } from "@/data/profile"
import { cn } from "@/lib/utils"

export function Experience() {
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
            Work Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My professional journey
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-navy-600 via-navy-600/50 to-transparent sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${exp.from}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 hidden h-4 w-4 rounded-full border-2 border-navy-500 bg-background sm:block" />

                <div className="rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-navy-600/50">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <span
                          className={cn(
                            "rounded-full px-2.5 py-0.5 text-xs font-medium",
                            exp.type === "CONTRACTOR"
                              ? "bg-navy-900 text-navy-300"
                              : exp.type === "PROJECT"
                              ? "bg-anthracite-800 text-anthracite-200"
                              : exp.type === "FULL TIME"
                              ? "bg-navy-800 text-navy-200"
                              : "bg-anthracite-900 text-anthracite-300"
                          )}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <p className="mt-1 flex items-center gap-2 text-navy-400">
                        <Briefcase className="h-4 w-4" />
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {exp.from} - {exp.to || "Present"}
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
