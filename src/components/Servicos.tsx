import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3, Megaphone, Users, Key } from 'lucide-react';

const services = [
  { icon: <BarChart3 size={32} />, number: '01', title: 'Avaliação Estratégica', color: '#0033A0', delay: 0.10, desc: 'Análise realista e assertiva do valor do imóvel, com estudo comparativo de mercado e potencial de negócio. Dados concretos para decisões seguras.' },
  { icon: <Megaphone size={32} />, number: '02', title: 'Marketing de Alto Impacto', color: '#DA291C', delay: 0.20, desc: 'Exposição profissional do imóvel através das plataformas RE/MAX, fotografia de qualidade e posicionamento digital direcionado ao público certo.' },
  { icon: <Users size={32} />, number: '03', title: 'Visita Qualificada', color: '#722F37', delay: 0.30, desc: 'Acompanhamento próximo em cada visita, com filtragem de interessados sérios para otimizar o seu tempo e garantir resultados concretos.' },
  { icon: <Key size={32} />, number: '04', title: 'Fecho Seguro', color: '#C9A96E', delay: 0.40, desc: 'Acompanhamento jurídico e administrativo completo, garantindo uma transação tranquila e sem surpresas até à entrega das chaves.' },
];

function ServiceCard({ icon, number, title, color, delay, desc, inView }: { icon: React.ReactNode; number: string; title: string; color: string; delay: number; desc: string; inView: boolean }) {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 60, rotateX: -10 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.7, delay, type: 'spring', stiffness: 100 }}
      style={{ perspective: '800px' }}
    >
      {/* Number watermark */}
      <div style={{ position: 'absolute', top: 16, right: 24, fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '4rem', opacity: 0.06, color, lineHeight: 1, userSelect: 'none' }}>{number}</div>

      {/* Top bar */}
      <motion.div
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, borderRadius: '20px 20px 0 0', background: `linear-gradient(90deg, ${color}, transparent)` }}
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: delay + 0.3 }}
      />

      {/* Icon */}
      <div style={{ width: 56, height: 56, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${color}18`, border: `1px solid ${color}28`, color, marginBottom: 20, transition: 'all 0.3s ease' }}>
        {icon}
      </div>

      <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: `${color}88`, marginBottom: 10 }}>
        Passo {number}
      </div>

      <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#1a1a1a', marginBottom: 14, lineHeight: 1.3 }}>{title}</h3>

      <div style={{ width: 32, height: 2, background: color, marginBottom: 14, borderRadius: 1, transition: 'width 0.3s ease' }} className="card-line" />

      <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.82rem', color: '#666', lineHeight: 1.7, margin: 0 }}>{desc}</p>
    </motion.div>
  );
}

export default function Servicos() {
  const ref = useRef<HTMLElement>(null);
  const [sectionRef, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  useScroll({ target: ref, offset: ['start end', 'end start'] });

  return (
    <section
      ref={ref}
      id="servicos"
      style={{ position: 'relative', overflow: 'hidden', padding: '48px 0', background: 'linear-gradient(160deg, #0a0e2a 0%, #0d1440 40%, #1a0815 100%)' }}
    >
      {/* Dots */}
      <div className="dots-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.12, pointerEvents: 'none' }} />

      {/* Center glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,51,160,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />



      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }} ref={sectionRef}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <motion.span initial={{ opacity: 0, y: -20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A96E' }}>
            Como posso Ajudar ?
          </motion.span>

          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#fff', marginTop: 12, marginBottom: 16, lineHeight: 1.1 }}>
            Como posso{' '}
            <span style={{ background: 'linear-gradient(135deg, #C9A96E, #E2C48A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Ajudar ?</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Mais do que um método, é um compromisso de proximidade. Descubra como transformo a venda ou compra da sua casa numa jornada tranquila, segura e sem qualquer complicação.
          </motion.p>

          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={inView ? { opacity: 1, scaleX: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="divider-gold" />
          </motion.div>
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }} className="services-cards-grid">
          {services.map(s => <ServiceCard key={s.number} {...s} inView={inView} />)}
        </div>


      </div>

      <style>{`
        @media (max-width: 1024px) { .services-cards-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px)  { .services-cards-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px)  { .hide-mobile { display: none !important; } }
        .service-card:hover .card-line { width: 56px !important; }
        .service-card:hover > div[style*="alignItems: 'center'"] { transform: scale(1.1) rotate(5deg); }
      `}</style>
    </section>
  );
}
