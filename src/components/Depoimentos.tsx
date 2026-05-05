import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  { name: 'Maria & João Santos', role: 'Compradores de Primeira Casa', text: 'A Alexandra foi incansável na procura da nossa casa de sonho. Profissional, atenta e sempre disponível. Recomendamos sem hesitar!', stars: 5, initials: 'MJ', color: '#0033A0' },
  { name: 'Carlos Oliveira',     role: 'Investidor Imobiliário',       text: 'Graças à expertise da Alexandra, consegui vender o meu imóvel pelo valor que queria. Uma consultora que realmente defende os nossos interesses.', stars: 5, initials: 'CO', color: '#DA291C' },
  { name: 'Ana Ferreira',        role: 'Proprietária',                 text: 'Processo extremamente organizado e transparente. Senti-me acompanhada em cada etapa. A RE/MAX DinâmicaDaire superou todas as minhas expetativas.', stars: 5, initials: 'AF', color: '#722F37' },
];

export default function Depoimentos() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section style={{ background: '#fff', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }} ref={ref}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.span initial={{ opacity: 0, y: -20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A96E' }}>
            DEPOIMENTOS
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#1a1a1a', marginTop: 12, marginBottom: 8 }}>
            O Que Dizem os <span style={{ color: '#0033A0' }}>Nossos Clientes</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={inView ? { opacity: 1, scaleX: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }} style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <div className="divider-gold" />
          </motion.div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.1)', transition: { duration: 0.3 } }}
              style={{ background: 'linear-gradient(135deg, #F5F5F0, #fff)', border: '1px solid rgba(201,169,110,0.15)', borderRadius: 20, padding: 32, position: 'relative', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', cursor: 'default' }}
            >
              {/* Top accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, borderRadius: '20px 20px 0 0', background: `linear-gradient(90deg, ${t.color}, transparent)` }} />

              {/* Quote icon */}
              <div style={{ width: 40, height: 40, borderRadius: 12, background: `${t.color}18`, color: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Quote size={18} />
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 4, marginBottom: 14 }}>
                {[...Array(t.stars)].map((_, j) => <Star key={j} size={13} fill="#C9A96E" color="#C9A96E" />)}
              </div>

              <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#444', lineHeight: 1.7, marginBottom: 20 }}>"{t.text}"</p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#fff', flexShrink: 0 }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#1a1a1a' }}>{t.name}</div>
                  <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.72rem', color: '#999' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1024px) { .testimonials-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
