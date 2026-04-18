"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Footer from "@/components/Footer"

export default function Home() {
  const [lang, setLang] = useState<"en" | "zh">("en")

  return (
    <main className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
<Education lang={lang} />
      <Experience lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <Footer />
    </main>
  )
}