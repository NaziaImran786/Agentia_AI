"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Monitor, Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Monitor className="h-6 w-6 text-purple-500 hover:text-pink-500" />
            <span className="text-xl font-bold">Agentia World</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <Button className="bg-purple-600 hover:bg-pink-500">Launch Console</Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLinks mobile />
            <div className="pt-4">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Launch Console</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass = mobile
    ? "block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
    : "text-sm text-gray-300 hover:text-white"

  return (
    <>
      <Link href="#features" className={linkClass}>
        Features
      </Link>
      <Link href="#technology" className={linkClass}>
        Technology
      </Link>
      <Link href="#agents" className={linkClass}>
        Agents
      </Link>
      <Link href="#pricing" className={linkClass}>
        Pricing
      </Link>
      <Link href="#contact" className={linkClass}>
        Contact
      </Link>
    </>
  )
}

