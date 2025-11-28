import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-muted/40 via-background to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-muted/50 border border-border/50">
            <p className="text-sm text-muted-foreground">🚀 Building the Future of Web</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance mb-6 text-foreground">
            Craft stunning websites that drive results
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance mb-10 leading-relaxed">
            Transform your vision into a powerful digital presence. We build modern, fast, and scalable websites that
            engage users and grow your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 group">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
