import type { Metadata } from "next"
import Image from "next/image"
import { Award } from "lucide-react"
import { certificates } from "@/data/profile"

export const metadata: Metadata = {
  title: "Certifications | Juan Manuel Grehuello",
  description:
    "Professional certifications and credentials in web development, including Full Stack Development and WordPress.",
}

export default function CertificationsPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Certifications
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Professional credentials and achievements
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <article
              key={cert.degree}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all hover:border-navy-600/50"
            >
              {/* Certificate Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
                <Image
                  src={cert.image}
                  alt={`${cert.degree} certificate from ${cert.institution}`}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900 text-navy-400">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">
                      {cert.degree}
                    </h2>
                    <p className="mt-1 text-sm text-navy-400">{cert.institution}</p>
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-600/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 rounded-2xl border border-border/50 bg-card p-8 text-center">
          <h3 className="text-xl font-bold text-foreground">
            Continuous Learning
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            I&apos;m committed to staying current with the latest technologies and best practices 
            in web development. These certifications represent milestones in my ongoing 
            journey of professional growth and skill enhancement.
          </p>
        </div>
      </div>
    </div>
  )
}
