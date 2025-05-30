import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main>
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        padding: '4rem 2rem'
      }}>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ fontSize: '3rem' }}>
          Brutal klar. Extrem wirkungsvoll.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} style={{ maxWidth: 600, marginTop: '1rem', fontSize: '1.25rem', color: '#ccc' }}>
          Eine Lusion-inspirierte Seite mit Stil, Scroll-Übergängen und Wirkung.
        </motion.p>
      </section>

      <section style={{
        minHeight: '100vh',
        backgroundColor: '#fff',
        color: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h2 style={{ fontSize: '2rem' }}>[Videoübergang – Platzhalterbereich]</h2>
      </section>

      <section style={{
        minHeight: '100vh',
        backgroundColor: '#111',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <p style={{ fontSize: '1.5rem' }}>[Hier kann ein eingebettetes Video erscheinen]</p>
      </section>
    </main>
  )
}