import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    gsap.fromTo('.hero-text', { opacity: 0, y: 100 }, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top center'
      }
    });

    gsap.fromTo('.transition-text', { opacity: 0, y: 100 }, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.transition-section',
        start: 'top center'
      }
    });
  }, []);

  return (
    <main>
      <section className="hero h-screen bg-black text-white flex flex-col justify-center items-center relative overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover z-0">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center">
          <h1 className="hero-text text-6xl font-bold">Visuelles Erlebnis</h1>
          <p className="mt-6 text-lg max-w-xl mx-auto text-gray-300">Lusion-Stil, High-End Design, mobiloptimiert</p>
        </div>
      </section>

      <section className="transition-section h-screen bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="transition-text text-4xl font-bold">Dein Business, perfekt präsentiert</h2>
          <p className="mt-4 max-w-md mx-auto">Maßgeschneiderte Inhalte mit wow-Effekt</p>
        </div>
      </section>

      <section className="h-screen bg-gradient-to-r from-purple-800 to-indigo-900 flex items-center justify-center text-white text-center px-4">
        <div>
          <h2 className="text-4xl font-bold mb-4">Ultra starker Verkaufsfaktor</h2>
          <p className="max-w-xl mx-auto">Alles aufgebaut auf Conversion – mit fließenden Übergängen, GSAP Animationen und responsivem Design.</p>
        </div>
      </section>

      <section className="h-screen bg-black text-white flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl font-bold mb-6">Das bekommst du:</h2>
        <ul className="space-y-4 text-lg">
          <li>✅ Extrem starke visuelle Wirkung (wie Lusion)</li>
          <li>✅ GSAP ScrollTrigger für Animationen</li>
          <li>✅ Mobiloptimiert & schnell</li>
          <li>✅ Bereit für dein Angebot</li>
        </ul>
      </section>
    </main>
  );
}