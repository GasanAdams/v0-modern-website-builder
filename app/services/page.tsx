import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Zap, ShoppingCart, Palette, Code, Check } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites built with modern technologies for optimal performance and user experience.",
      features: [
        "React, Next.js, and modern frameworks",
        "SEO optimization and accessibility",
        "Content management systems",
        "API integration and development",
      ],
      price: "Starting at $2,500",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Beautiful, mobile-first designs that work seamlessly across all devices and screen sizes.",
      features: [
        "Mobile-first approach",
        "Cross-browser compatibility",
        "Tablet and desktop optimization",
        "Touch-friendly interfaces",
      ],
      price: "Starting at $1,500",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast load times and optimized code for better SEO and user engagement.",
      features: [
        "Page speed optimization",
        "Image and asset compression",
        "Code splitting and lazy loading",
        "CDN integration",
      ],
      price: "Starting at $800",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Powerful online stores with secure payments and inventory management systems.",
      features: [
        "Stripe and PayPal integration",
        "Inventory management",
        "Shopping cart and checkout",
        "Order tracking system",
      ],
      price: "Starting at $3,500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Intuitive interfaces designed with your users in mind, backed by research and testing.",
      features: [
        "User research and personas",
        "Wireframes and prototypes",
        "Visual design systems",
        "Usability testing",
      ],
      price: "Starting at $2,000",
    },
    {
      icon: Code,
      title: "Custom Applications",
      description: "Tailored web applications that solve your unique business challenges and workflows.",
      features: [
        "Custom business logic",
        "Database design and integration",
        "User authentication",
        "Real-time features",
      ],
      price: "Custom pricing",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 md:py-40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Our Services</h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Comprehensive web development solutions to bring your digital vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border/50 hover:border-accent transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm font-semibold text-foreground mb-3">{service.price}</p>
                    <Link href="/contact">
                      <Button className="w-full">Get a Quote</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
