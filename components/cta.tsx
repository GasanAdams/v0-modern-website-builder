"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function CTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Email submitted:", email)
    setSubmitted(true)
    setTimeout(() => {
      router.push("/contact")
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to build something amazing?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-balance leading-relaxed max-w-2xl mx-auto">
            Let's discuss your project and create a website that exceeds your expectations. Get a free consultation
            today.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 group"
              disabled={submitted}
            >
              {submitted ? "Redirecting..." : "Get Started"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <p className="text-sm text-muted-foreground">No spam. Unsubscribe anytime. Free consultation included.</p>
        </div>
      </div>
    </section>
  )
}
