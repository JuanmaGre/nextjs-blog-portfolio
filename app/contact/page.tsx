import type { Metadata } from "next"
import Image from "next/image"
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react"
import { contactData } from "@/data/profile"

export const metadata: Metadata = {
  title: "Contact | Juan Manuel Grehuello",
  description:
    "Get in touch with Juan Manuel Grehuello for web development projects, collaborations, or job opportunities.",
}

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: contactData.email,
    href: `mailto:${contactData.email}`,
    description: "Best for detailed inquiries",
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactData.phone,
    href: `tel:${contactData.phone.replace(/\s/g, "")}`,
    description: "Available during business hours",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Send a message",
    href: contactData.whatsapp,
    description: "Quick responses",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: contactData.github,
    username: "@JuanmaGre",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: contactData.linkedin,
    username: "juanmanuelgrehuello-dev",
  },
]

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind? Let&apos;s work together to bring your ideas to life.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-card">
              <div className="relative h-32 bg-gradient-to-br from-navy-800 to-navy-900">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `linear-gradient(to right, #475a77 1px, transparent 1px), 
                                   linear-gradient(to bottom, #475a77 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }} />
              </div>
              <div className="relative px-6 pb-6">
                <div className="-mt-16 flex justify-center">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-card bg-navy-900">
                    <Image
                      src="/portfolio.png"
                      alt={contactData.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h2 className="text-xl font-bold text-foreground">{contactData.name}</h2>
                  <p className="text-navy-400">{contactData.title}</p>
                  <div className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    Argentina
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Contact Methods</h3>
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-xl border border-border/50 bg-card p-4 transition-all hover:border-navy-600/50 hover:bg-navy-900/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-navy-400">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{method.label}</p>
                    <p className="text-sm text-muted-foreground">{method.value}</p>
                  </div>
                  <p className="hidden text-xs text-muted-foreground sm:block">
                    {method.description}
                  </p>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Social Profiles</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-border/50 bg-card p-4 transition-all hover:border-navy-600/50 hover:bg-navy-900/50"
                  >
                    <link.icon className="h-5 w-5 text-navy-400" />
                    <div>
                      <p className="font-medium text-foreground">{link.label}</p>
                      <p className="text-sm text-muted-foreground">{link.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Message Section */}
          <div className="flex flex-col justify-center rounded-2xl border border-border/50 bg-card p-8 text-center lg:p-12">
            <div className="mx-auto max-w-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-900">
                <Mail className="h-8 w-8 text-navy-400" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-foreground">
                Ready to Start a Project?
              </h3>
              <p className="mt-4 text-muted-foreground">
                Whether you need a new website, want to improve an existing one, or have 
                a unique project in mind, I&apos;m here to help. Let&apos;s discuss your ideas 
                and create something amazing together.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href={`mailto:${contactData.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-600 px-6 py-3 font-medium text-white transition-all hover:bg-navy-500"
                >
                  <Mail className="h-4 w-4" />
                  Send Email
                </a>
                <a
                  href={contactData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-600 bg-transparent px-6 py-3 font-medium text-foreground transition-all hover:bg-navy-800"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
