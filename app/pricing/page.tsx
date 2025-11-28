import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$2,500",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Mobile-first design",
        "Basic SEO optimization",
        "Contact form integration",
        "1 month of support",
        "Content management system",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$5,500",
      description: "Ideal for growing businesses",
      features: [
        "10-page responsive website",
        "Custom UI/UX design",
        "Advanced SEO optimization",
        "E-commerce integration",
        "3 months of support",
        "Analytics setup",
        "Performance optimization",
        "API integrations",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale projects",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced integrations",
        "Database architecture",
        "12 months of support",
        "Dedicated project manager",
        "Priority support",
        "Custom features",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 md:py-40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Choose the perfect plan for your business needs. All plans include hosting setup and training.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-border/50 hover:border-accent transition-all ${
                  plan.popular ? "border-accent shadow-lg scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className={`w-full ${plan.popular ? "bg-accent hover:bg-accent/90" : ""}`}>
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">Need a custom solution?</p>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us for Custom Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
