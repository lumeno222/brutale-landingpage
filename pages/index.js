import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-black text-white">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold">
          Brutal klar. Extrem wirkungsvoll.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="mt-6 text-xl text-gray-400 max-w-xl">
          Eine Lusion-inspirierte Seite mit Stil, Scroll-Übergängen und Wirkung.
        </motion.p>
      </section>

      <section className="min-h-screen flex justify-center items-center bg-white text-black">
        <h2 className="text-3xl font-semibold">[Videoübergang – Platzhalterbereich]</h2>
      </section>

      <section className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
        <p className="text-xl">[Hier kann ein eingebettetes Video erscheinen]</p>
      </section>
    </main>
  )
}