import type React from "react"
import { Bot, Zap, Shield, Globe } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the capabilities that make our AI agents the perfect solution for your enterprise
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={Bot}
            title="Advanced AI"
            description="State-of-the-art language models powering intelligent conversations"
          />
          <FeatureCard
            icon={Zap}
            title="Fast Processing"
            description="Real-time responses with minimal latency for seamless interactions"
          />
          <FeatureCard
            icon={Shield}
            title="Enterprise Security"
            description="Bank-grade encryption and data protection for your peace of mind"
          />
          <FeatureCard
            icon={Globe}
            title="Global Scale"
            description="Deploy AI agents worldwide with automatic scaling and load balancing"
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="p-6 flex flex-col items-center  rounded-lg border border-gray-800 bg-black/50 backdrop-blur hover:scale-105 hover:shadow-blue-700 hover:shadow-2xl ">
      <div className="w-15 h-15 rounded-lg bg-purple-600/10 flex items-center justify-center mb-4 hover:rotate-12">
        <Icon className="w-14 h-14 text-purple-500" />
      </div>
      <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
      <p className="text-gray-400 text-center">{description}</p>
    </div>
  )
}

