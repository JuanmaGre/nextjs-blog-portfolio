"use client"

import { motion } from "framer-motion"
import { skills } from "@/data/profile"
import { cn } from "@/lib/utils"

export function Skills() {
  // Sort skills by percentage
  const sortedSkills = [...skills].sort((a, b) => b.percentage - a.percentage)

  return (
    <section className="py-20 sm:py-28 bg-navy-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Technologies I work with daily
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedSkills.map((item, index) => (
            <motion.div
              key={item.skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group rounded-xl border border-border/50 bg-card p-5 transition-all hover:border-navy-600/50 hover:bg-navy-900/50"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-foreground">{item.skill}</h3>
                <span className="text-sm font-semibold text-navy-400">
                  {item.percentage}%
                </span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-navy-900">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
                  className={cn(
                    "h-full rounded-full",
                    item.percentage >= 80
                      ? "bg-gradient-to-r from-navy-500 to-navy-400"
                      : item.percentage >= 60
                      ? "bg-gradient-to-r from-navy-600 to-navy-500"
                      : "bg-gradient-to-r from-navy-700 to-navy-600"
                  )}
                />
              </div>
              <p className="mt-2 text-xs capitalize text-muted-foreground">
                {item.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
