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
      <section className="hero h-screen bg-black text-white flex flex-col justify-center items-center">
        <h1 className="hero-text text-6xl font-bold">Brutale Landingpage</h1>
        <p className="mt-6 text-lg max-w-xl text-center text-gray-400">So wie Lusion – aber für dein Business.</p>
      </section>

      <section className="transition-section h-screen bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="transition-text text-4xl font-bold">Smooth Scroll, krasser Look</h2>
          <p className="mt-4 max-w-md mx-auto">Mit GSAP & Tailwind ins nächste Level.</p>
        </div>
      </section>

      <section className="h-screen bg-cover bg-center relative flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=1400&q=80')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-xl">
          <h2 className="text-3xl font-bold">Video-Effekt Sektion</h2>
          <p className="mt-2 max-w-md">Perfekt für deine Key-Messages & krasse Visuals.</p>
        </div>
      </section>

      <section className="h-screen bg-black text-white flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl font-bold mb-6">Das bekommst du:</h2>
        <ul className="space-y-4 text-lg">
          <li>✅ Lusion-Look mit GSAP ScrollTrigger</li>
          <li>✅ Voll responsive und mobiloptimiert</li>
          <li>✅ Animationen mit Wow-Faktor</li>
          <li>✅ Sofort einsatzbereit</li>
        </ul>
      </section>
    </main>
  );
}