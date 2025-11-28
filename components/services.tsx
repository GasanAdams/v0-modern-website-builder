import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Zap, ShoppingCart, Palette, Code } from "lucide-react"
import Link from "next/link"

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites built with modern technologies for optimal performance and user experience.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Beautiful, mobile-first designs that work seamlessly across all devices and screen sizes.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast load times and optimized code for better SEO and user engagement.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Powerful online stores with secure payments and inventory management systems.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Intuitive interfaces designed with your users in mind, backed by research and testing.",
    },
    {
      icon: Code,
      title: "Custom Applications",
      description: "Tailored web applications that solve your unique business challenges and workflows.",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Services that scale with your business
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            From concept to launch and beyond, we provide comprehensive web development services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border/50 hover:border-accent transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" variant="outline">
              View All Services & Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
