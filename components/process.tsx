export function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We analyze your goals, target audience, and competitors to create a strategic roadmap.",
    },
    {
      number: "02",
      title: "Design & Prototype",
      description: "Our designers create beautiful mockups and interactive prototypes for your approval.",
    },
    {
      number: "03",
      title: "Development",
      description: "We build your website with clean, efficient code using the latest technologies.",
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "We deploy your site and provide ongoing maintenance and optimization support.",
    },
  ]

  return (
    <section id="process" className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our proven process</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            A streamlined approach that ensures quality results and transparent communication every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-4">
                <span className="text-6xl font-bold text-muted/30">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-border/50 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
