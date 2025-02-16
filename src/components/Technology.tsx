import type React from "react"
import { Cpu, Network, Lock, Gauge } from "lucide-react"

export function Technology() {
  return (
    <section id="technology" className="py-16 container mx-auto md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Cutting-edge Technology</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Built on the latest advancements in artificial intelligence and cloud computing
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TechCard
          icon={Cpu}
          title="Advanced Processing"
          description="Leveraging the latest in neural network architectures for superior performance"
        />
        <TechCard
          icon={Network}
          title="Distributed Systems"
          description="Highly available infrastructure spread across multiple regions"
        />
        <TechCard
          icon={Lock}
          title="Security First"
          description="Enterprise-grade security with end-to-end encryption"
        />
        <TechCard
          icon={Gauge}
          title="Real-time Analytics"
          description="Comprehensive monitoring and analytics for your AI agents"
        />
      </div>
    </section>
  )
}

function TechCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="p-6 rounded-lg border border-gray-800 bg-black/50 backdrop-blur hover:scale-105 hover:text-purple-500 hover:shadow-blue-500 hover:shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-blue-500" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}


