import { Contact } from "@/components/Contact";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { Technology } from "@/components/Technology";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Technology />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
