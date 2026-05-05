import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronDown, Phone } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const springCfg = { stiffness: 150, damping: 30 };
  const mouseX = useSpring(0, springCfg);
  const mouseY = useSpring(0, springCfg);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(((e.clientX - rect.left - rect.width / 2) / rect.width) * 20);
      mouseY.set(((e.clientY - rect.top - rect.height / 2) / rect.height) * 20);
    };
    const el = ref.current;
    el?.addEventListener('mousemove', onMove);
    return () => el?.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const scrollToNext = () => document.getElementById('autoridade')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      ref={ref}
      id="hero"
      className="bg-hero-gradient"
      style={{ minHeight: '100vh', height: 'auto', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', boxSizing: 'border-box' }}
    >
      {/* Ambient orbs */}
      <motion.div className="ambient-orb" style={{ position: 'absolute', top: 80, right: 0, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,51,160,0.06) 0%, transparent 70%)', pointerEvents: 'none', x: mouseX, y: mouseY }} />
      <motion.div className="ambient-orb" style={{ position: 'absolute', bottom: 0, left: 0, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(114,47,55,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Dots */}
      <div className="dots-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />



      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 40, alignItems: 'center' }} className="hero-grid-main">

          {/* LEFT */}
          <motion.div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 60, y: textY, opacity }} className="hero-text-col">



            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.9, delay: 0.3, type: 'spring', stiffness: 100 }}
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', lineHeight: 1.1, color: '#0033A0', marginBottom: 24, perspective: '1000px' }}
            >
              A Sua Casa e seu Investimento é{' '}
              <span style={{ color: '#DA291C', display: 'inline-block' }}>Nosso Compromisso.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(0.9rem, 1.3vw, 1.15rem)', color: '#722F37', lineHeight: 1.6, marginBottom: 20 }}
            >
              A <strong>Equipa José Ferreira e Alexandra Moreira</strong> ajuda-o a comprar ou vender o seu imóvel sem complicações.
              Estamos na <strong>RE/MAX DinâmicaDaire</strong> para lhe dar toda a segurança que precisa.
            </motion.p>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65 }}
              style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1rem', color: '#444', lineHeight: 1.8, marginBottom: 40, maxWidth: 520 }}
            >
              Não somos apenas consultores, somos os seus parceiros nesta jornada. Cuidamos de tudo, desde a avaliação até à entrega das chaves,
              para que tenha a garantia do melhor negócio. Porque para nós, o seu sucesso é a nossa maior conquista.
            </motion.p>

            {/* CTA */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }} style={{ marginBottom: 16 }}>
              <motion.a href="tel:+351966425721" className="btn-primary" style={{ padding: '12px 24px', fontSize: '0.8rem' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Phone size={16} /> FALAR COM O JOSÉ AGORA
              </motion.a>
            </motion.div>



          </motion.div>

          {/* RIGHT — Photo */}
          <motion.div
            className="hero-photo-col"
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}
            initial={{ opacity: 0, x: 60, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 80 }}
          >
            {/* Morphing blob */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
              <div className="animate-morph" style={{ width: 'min(640px, 55vw)', height: 'min(750px, 80vh)', background: 'linear-gradient(135deg, rgba(0,51,160,0.08), rgba(114,47,55,0.08))' }} />
            </div>

            <motion.div style={{ position: 'relative', zIndex: 10, x: !isMobile ? mouseX : 0, y: !isMobile ? mouseY : 0 }}>
              {/* Decorative ring */}
              <div style={{ position: 'absolute', inset: -16, borderRadius: 24, border: '2px solid #C9A96E', opacity: 0.2 }} />

              {/* Photo */}
              <motion.div
                style={{ position: 'relative', overflow: 'hidden', borderRadius: 16, maxWidth: 620, boxShadow: '0 40px 100px rgba(0,0,0,0.22)' }}
                whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}
              >
                <img
                  src="/images/alexandra-hero.png"
                  alt="José Ferreira — Consultor Imobiliário RE/MAX DinâmicaDaire"
                  style={{ width: '100%', maxHeight: 'min(750px, 80vh)', objectFit: 'cover', objectPosition: 'top', display: 'block', imageRendering: 'auto', filter: 'contrast(1.02) brightness(1.02) saturate(1.05) drop-shadow(0 15px 30px rgba(0,0,0,0.1))' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to top, rgba(114,47,55,0.4), transparent)' }} />
              </motion.div>

              {/* Large Background Logo */}
              <motion.div
                style={{ position: 'absolute', right: -120, top: 40, zIndex: -1, opacity: 0.12, pointerEvents: 'none' }}
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img src="/images/remax-balloon.png" alt="" style={{ width: 320, height: 'auto', objectFit: 'contain' }} />
              </motion.div>

              {/* Overlapping Logo */}
              <motion.div
                className="hero-logo-overlap"
                style={{ position: 'absolute', left: isMobile ? '50%' : -160, bottom: -60, zIndex: 30 }}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -25, 0],
                  x: isMobile ? '-50%' : 0,
                  rotate: [0, 3, 0, -3, 0]
                }}
                whileHover={{
                  scale: 1.05,
                  filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3)) brightness(1.05)',
                  transition: { duration: 0.3 }
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.6 },
                  scale: { duration: 0.8, delay: 0.6 },
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2
                  },
                  rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2
                  }
                }}
              >
                <img
                  src="/images/remax-logo.png"
                  alt="RE/MAX Logo"
                  className="hero-logo-img"
                  style={{ width: 340, height: 'auto', display: 'block', filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.2))' }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'pointer' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          onClick={scrollToNext}
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={22} color="#C9A96E" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        #hero { padding-top: 100px; padding-bottom: 60px; }
        @media (max-width: 768px) {
          #hero { padding-top: 60px !important; padding-bottom: 40px !important; }
          .hero-grid-main { grid-template-columns: 1fr !important; gap: 20px !important; }
          .hero-photo-col { order: -1; min-height: auto !important; padding-top: 0 !important; margin-bottom: 20px; }
          .hero-text-col  { order: 1; text-align: center; align-items: center; padding: 0 !important; }
          .hero-text-col h1 { font-size: 1.8rem !important; margin-bottom: 16px !important; }
          .hero-text-col p { font-size: 0.9rem !important; margin-left: auto; margin-right: auto; margin-bottom: 16px !important; }
          .hero-logo-overlap { 
            bottom: -60px !important; 
            z-index: 50 !important;
          }
          .hero-logo-img { 
            width: clamp(300px, 80vw, 420px) !important;
            height: auto !important;
          }
          .animate-morph {
            width: 80vw !important;
            height: 80vw !important;
          }
          .ambient-orb { display: none; }
        }
      `}</style>
    </section>
  );
}
