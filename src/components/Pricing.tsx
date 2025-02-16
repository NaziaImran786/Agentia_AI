import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Choose the perfect plan for your business needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto ">
          <PricingCard
            title="Starter"
            price="$99"
            description="Perfect for small businesses"
            features={["1 AI Agent",
               "100k messages/month",
               "Basic analytics",
               "Email support"]}
          />
          <PricingCard
            title="Professional"
            price="$299"
            description="Ideal for growing teams"
            features={[
              "5 AI Agents",
              "500k messages/month",
              "Advanced analytics",
              "Priority support",
              "Custom integrations",
            ]}
            highlighted
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            description="For large organizations"
            features={[
              "Unlimited AI Agents",
              "Unlimited messages",
              "Enterprise analytics",
              "24/7 support",
              "Custom development",
              "SLA guarantee",
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
}: {
  title: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}) {
  return (
    <div
      className={`p-8 rounded-lg border hover:scale-105 hover:shadow-blue-500 hover:shadow-2xl hover:border-purple-500 ${
        highlighted ? "border-purple-500 bg-purple-500/10" : "border-gray-800 bg-black/50"
      } backdrop-blur`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-400">/month</span>
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${highlighted ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-800 hover:bg-gray-700"}`}
      >
        Get Started
      </Button>
    </div>
  )
}

