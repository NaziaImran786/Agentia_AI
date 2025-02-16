import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Globe, Github, Linkedin, Twitter } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-center mb-12">Ready to transform your business with AI?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-500" />
                <a href="mailto:contact@agentiaworld.com" className="text-gray-300 hover:text-white">
                  contact@agentiaworld.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-purple-500" />
                <a
                  href="https://www.agentiaworld.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  www.agentiaworld.com
                </a>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input id="firstName" placeholder="First Name" className="bg-gray-900 border-gray-700" />
                </div>
                <div>
                  <Input id="lastName" placeholder="Last Name" className="bg-gray-900 border-gray-700" />
                </div>
              </div>
              <div>
                <Input id="email" type="email" placeholder="Email Address" className="bg-gray-900 border-gray-700" />
              </div>
              <div>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  className="min-h-[150px] bg-gray-900 border-gray-700"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

