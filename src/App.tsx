import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TickerBand from './components/TickerBand';
import Autoridade from './components/Autoridade';
import Servicos from './components/Servicos';
import Dashboard3D from './components/Dashboard3D';
import Depoimentos from './components/Depoimentos';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          height: 3, transformOrigin: 'left', scaleX,
          background: 'linear-gradient(90deg, #DA291C, #722F37, #C9A96E)',
          zIndex: 9999,
        }}
      />

      <Navbar />

      <main>
        {/* SEÇÃO 1 — HERO */}
        <Hero />

        {/* TICKER */}
        <TickerBand />

        {/* SEÇÃO 2 — AUTORIDADE */}
        <Autoridade />

        {/* SEÇÃO 3 — SERVIÇOS */}
        <Servicos />



        {/* SEÇÃO 4 — CTA FINAL */}
        <CtaFinal />
      </main>

      <Footer />

      {/* WhatsApp floating button */}
      <WhatsAppFloat />

      {/* Global font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:wght@300;400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}
