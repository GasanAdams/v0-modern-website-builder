"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold text-foreground hover:text-foreground/80 transition-colors">
              WebCraft
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/#services"
                className={`text-sm transition-colors ${
                  pathname === "/"
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Services
              </Link>
              <Link
                href="/#process"
                className={`text-sm transition-colors ${
                  pathname === "/"
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Process
              </Link>
              <Link
                href="/pricing"
                className={`text-sm transition-colors ${
                  pathname === "/pricing"
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className={`text-sm transition-colors ${
                  pathname === "/contact"
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          <Link href="/contact">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
