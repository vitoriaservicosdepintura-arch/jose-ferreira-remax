import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Award, Globe, MapPin, Shield } from 'lucide-react';

const credentials = [
  { icon: <Globe size={20} />, title: 'Expertise RE/MAX', desc: 'Acesso à maior rede imobiliária mundial e a ferramentas exclusivas de mercado.' },
  { icon: <Award size={20} />, title: 'Atendimento Personalizado', desc: 'Cada cliente é único. O nosso método é adaptado às suas necessidades específicas, sem listas genéricas.' },
  { icon: <MapPin size={20} />, title: 'Conhecimento Local Estratégico', desc: 'Análise profunda da zona, tendências de mercado e potencial de valorização.' },
  { icon: <Shield size={20} />, title: 'Negociação Defendida', desc: 'Representamos os seus interesses com rigor, desde a primeira visita até à escritura.' },
];



export default function Autoridade() {
  const ref = useRef<HTMLElement>(null);
  const [sectionRef, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  // No Desktop: movimento lateral. No Mobile: movimento reduzido ou nulo.
  const photoX = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);
  const textX = useTransform(scrollYProgress, [0, 1], ['3%', '-3%']);

  return (
    <section ref={ref} id="autoridade" style={{ background: '#F5F5F0', position: 'relative', overflow: 'hidden', padding: '0' }}>

      {/* Watermark "A" */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', overflow: 'hidden' }} aria-hidden="true">
        <span className="watermark-am" style={{ color: '#0033A0' }}>A</span>
      </div>

      <div className="lines-pattern" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px' }} ref={sectionRef}>

        {/* Section label */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: 56 }}
          initial={{ opacity: 0, y: -20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        >
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa' }}>
            POR QUE CONFIAR EM NÓS?
          </span>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="authority-main-grid">

          {/* LEFT — Photo */}
          <motion.div style={{ position: 'relative', display: 'flex', justifyContent: 'center', x: photoX }}>
            <div style={{ position: 'relative' }}>
              {/* Balloon background */}
              <motion.img
                src="/images/remax-balloon.png"
                alt="RE/MAX Balloon"
                animate={{
                  y: [0, -25, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="authority-balloon"
                style={{
                  position: 'absolute',
                  top: -60,
                  left: -120,
                  width: 420,
                  opacity: 0.15,
                  zIndex: 0,
                  pointerEvents: 'none'
                }}
              />

              {/* Gold corner frames */}
              <div style={{ position: 'absolute', top: -20, left: -20, width: 56, height: 56, borderTop: '3px solid #C9A96E', borderLeft: '3px solid #C9A96E', zIndex: 2, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: -20, right: -20, width: 56, height: 56, borderBottom: '3px solid #C9A96E', borderRight: '3px solid #C9A96E', zIndex: 2, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', inset: -8, border: '2px solid rgba(0,51,160,0.15)', borderRadius: 24, zIndex: 1 }} />

              <motion.div style={{ overflow: 'hidden', borderRadius: 20, maxWidth: 480, boxShadow: '0 25px 70px rgba(0,0,0,0.18)', position: 'relative', zIndex: 3 }} whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
                <img
                  src="/images/alexandra.png"
                  alt="Alexandra Moreira"
                  style={{ width: '100%', maxHeight: 650, objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 24px', background: 'linear-gradient(to top, rgba(114,47,55,0.95) 0%, transparent 100%)' }}>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#fff', fontSize: '1rem', margin: 0 }}>Alexandra Moreira</p>
                  <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.8)', margin: '4px 0 0' }}>Consultora Imobiliária · RE/MAX DinâmicaDaire</p>
                </div>
              </motion.div>


            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div style={{ display: 'flex', flexDirection: 'column', x: textX }}>
            <motion.h2
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#0033A0', lineHeight: 1.15, marginBottom: 20 }}
            >
              Por Que Pode <span style={{ color: '#722F37' }}>Confiar</span> em Mim?
            </motion.h2>

            <motion.div
              className="divider-gold"
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
              style={{ marginBottom: 28, transformOrigin: 'left' }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}
              style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.92rem', color: '#555', lineHeight: 1.8, marginBottom: 32 }}
            >
              Sou a <strong style={{ color: '#722F37' }}>Alexandra Moreira</strong>, consultora imobiliária na RE/MAX DinâmicaDaire,
              e faço parte da <strong style={{ color: '#0033A0' }}>Equipa José Ferreira & Alexandra Moreira</strong>.
            </motion.p>

            {/* Credentials */}
            <div style={{ marginBottom: 32 }}>
              {credentials.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 18 }}
                >
                  <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg, #0033A0, #001a6b)', color: '#C9A96E', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <CheckCircle2 size={14} color="#C9A96E" />
                      <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.88rem', color: '#1a1a1a' }}>{c.title}</span>
                    </div>
                    <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.8rem', color: '#666', lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 1 }}
              style={{ background: 'rgba(114,47,55,0.05)', borderLeft: '4px solid #722F37', borderRadius: '0 12px 12px 0', padding: '20px 24px' }}
            >
              <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.1rem', color: '#722F37', lineHeight: 1.6, margin: '0 0 8px' }}>
                "Nós procuramos o melhor para Si."
              </p>
              <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.82rem', color: '#777', margin: 0 }}>
                Não é apenas um slogan. É o compromisso que assumimos em cada processo.
              </p>
            </motion.div>
          </motion.div>
        </div>


      </div>

      <style>{`
        @media (max-width: 768px) {
          .authority-main-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .stats-grid           { grid-template-columns: 1fr 1fr !important; }
          .authority-balloon    { width: 280px !important; left: -40px !important; top: -40px !important; }
          .authority-photo-container { scale: 0.95; }
        }
      `}</style>
    </section>
  );
}
