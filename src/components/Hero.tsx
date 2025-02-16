import { Button } from "@/components/ui/button"
import { Bot } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5">
          <span className="flex items-center text-sm font-medium text-purple-400">
            <Bot className="mr-2 h-4 w-4" />
            POWERED BY AGENTIA
          </span>
        </div>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600">
          Enterprise AI Agents
          <br />
          for the Future
        </h1>
        <div className="w-full max-w-2xl rounded-lg border border-gray-800 bg-gray-900/50 p-4 backdrop-blur">
          <div className="flex items-start space-x-3">
            <div className="rounded-full bg-purple-600 p-2">
              <Bot className="h-5 w-5" />
            </div>
            <p className="text-left text-gray-300">Hello! I&apos;m your AI agent. How can I enhance your business today?</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
          <Button size="lg" className="bg-purple-600 hover:bg-pink-500 w-full sm:w-auto">
            Deploy Your AI Agent
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}

