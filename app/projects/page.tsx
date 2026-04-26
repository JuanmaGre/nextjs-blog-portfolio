import type { Metadata } from "next"
import { Projects } from "@/components/sections/projects"

export const metadata: Metadata = {
  title: "Projects | Juan Manuel Grehuello",
  description:
    "Browse my portfolio of web development projects including WordPress sites, React applications, and e-commerce solutions.",
}

export default function ProjectsPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            All Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive view of my work and contributions
          </p>
        </div>
      </div>
      <Projects />
    </div>
  )
}
