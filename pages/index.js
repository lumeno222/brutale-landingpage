import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-black to-gray-900">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold">
          Das ultimative Paket für deinen Online-Auftritt
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="mt-4 text-xl text-gray-300 max-w-xl">
          Brutal. Klar. Verkaufsstark. Eine Seite, die wirkt.
        </motion.p>
        <motion.button whileHover={{ scale: 1.05 }} className="mt-6 bg-white text-black px-6 py-3 rounded-full shadow-lg font-semibold">
          Jetzt loslegen
        </motion.button>
      </section>

      <section className="h-screen flex flex-col justify-center items-center text-center bg-white text-black px-4">
        <h2 className="text-4xl font-bold">Was du bekommst</h2>
        <p className="mt-4 max-w-xl text-lg text-center">
          Von modernen Animationen über mobiloptimiertes Design bis hin zu einer Struktur, die verkauft.
        </p>
      </section>

      <section className="h-screen bg-gray-800 text-white flex items-center justify-center">
        <p className="text-xl">[VIDEO ABSPIELBEREICH – Platzhalter für späteres Video]</p>
      </section>

      <section className="py-24 bg-black text-white text-center px-4">
        <h2 className="text-4xl font-bold mb-8">Was macht dieses Paket brutal gut?</h2>
        <ul className="space-y-6 text-lg max-w-xl mx-auto text-left">
          <li>🚀 Ultra-schnelle Ladezeiten & 100% mobiloptimiert</li>
          <li>🎯 Texte, die verkaufen – visualisiert mit Dynamik</li>
          <li>🎥 Animierte Übergänge & Videoeinbindung wie in Top-Studios</li>
          <li>🧠 Struktur, die den Nutzer führt und zum Handeln bewegt</li>
        </ul>
      </section>
    </main>
  )
}