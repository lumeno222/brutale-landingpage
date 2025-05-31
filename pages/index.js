import { useEffect } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    gsap.from(".headline", {
      scrollTrigger: {
        trigger: ".headline",
        start: "top 80%"
      },
      y: 80,
      opacity: 0,
      duration: 1
    })
  }, [])

  return (
    <main>
      <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white text-center px-6">
        <motion.h1
          className="text-5xl font-bold headline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Das ultimative Paket für deinen Online-Auftritt
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mt-6 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Brutal. Klar. Verkaufsstark. Eine Seite, die wirkt.
        </motion.p>
      </section>

      <section className="min-h-screen flex items-center justify-center bg-white text-black">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Was du bekommst</h2>
          <p className="text-lg max-w-xl mx-auto">
            Von modernen Animationen über mobiloptimiertes Design bis hin zu einer Struktur, die verkauft.
          </p>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1607083206173-5b4a5e8932d1?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center relative text-white">
        <div className="bg-black bg-opacity-60 p-8 rounded-xl z-10 text-center">
          <p className="text-2xl font-medium">Video-Hintergrund mit Effekt</p>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center bg-[#111] text-white text-center px-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">Was macht dieses Paket brutal gut?</h2>
          <ul className="text-lg space-y-4 max-w-xl mx-auto">
            <li>🚀 Ultra-schnelle Ladezeiten & 100% mobiloptimiert</li>
            <li>🎯 Texte, die verkaufen – visualisiert mit Dynamik</li>
            <li>🎥 Animierte Übergänge & Videoeinbindung wie in Top-Studios</li>
            <li>🧠 Struktur, die den Nutzer führt und zum Handeln bewegt</li>
          </ul>
        </div>
      </section>
    </main>
  )
}