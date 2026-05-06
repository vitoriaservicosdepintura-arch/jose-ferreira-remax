import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Home, Eye, Handshake } from 'lucide-react';

const metrics = [
  { icon: <Home size={20} />,      label: 'Imóveis Ativos',    value: '47',   suffix: '',  change: '+12%',     up: true },
  { icon: <Eye size={20} />,       label: 'Visitas Realizadas', value: '320',  suffix: '+', change: '+28%',     up: true },
  { icon: <TrendingUp size={20} />,label: 'Valor Médio',       value: '285K', suffix: '€', change: '+8%',      up: true },
  { icon: <Handshake size={20} />, label: 'Negócios Fechados', value: '98',   suffix: '%', change: 'Satisfação',up: true },
];

function DashCard({ icon, label, value, suffix, change, delay, inView }: { icon: React.ReactNode; label: string; value: string; suffix: string; change: string; delay: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setRotX(-(((e.clientY - r.top) / r.height) - 0.5) * 15);
    setRotY((((e.clientX - r.left) / r.width) - 0.5) * 15);
  };
  const onLeave = () => { setHovered(false); setRotX(0); setRotY(0); };

  return (
    <motion.div
      style={{ perspective: '800px' }}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, type: 'spring', stiffness: 100 }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
    >
      <motion.div
        style={{
          borderRadius: 16, padding: 24,
          background: hovered ? 'rgba(0,51,160,0.15)' : 'rgba(255,255,255,0.05)',
          border: `1px solid ${hovered ? 'rgba(201,169,110,0.4)' : 'rgba(255,255,255,0.08)'}`,
          backdropFilter: 'blur(20px)',
          boxShadow: hovered ? '0 25px 60px rgba(0,0,0,0.4)' : '0 8px 24px rgba(0,0,0,0.2)',
          rotateX: rotX, rotateY: rotY,
          transition: 'background 0.3s, border 0.3s, box-shadow 0.3s',
          cursor: 'default', position: 'relative', overflow: 'hidden',
        }}
      >
        {hovered && (
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(201,169,110,0.12), transparent 60%)', pointerEvents: 'none' }} />
        )}
        <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(0,51,160,0.35)', color: '#C9A96E', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, transition: 'transform 0.3s', transform: hovered ? 'scale(1.1) rotate(5deg)' : 'none' }}>
          {icon}
        </div>
        <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#fff', fontSize: '2rem', lineHeight: 1, marginBottom: 4 }}>
          {value}<span style={{ fontSize: '1.1rem', color: '#C9A96E' }}>{suffix}</span>
        </div>
        <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', marginBottom: 12 }}>{label}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.72rem', color: '#4ade80' }}>
          <TrendingUp size={11} />{change}
        </div>
        {hovered && <div style={{ position: 'absolute', bottom: 0, left: 16, right: 16, height: 1, background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)' }} />}
      </motion.div>
    </motion.div>
  );
}

export default function Dashboard3D() {
  const ref = useRef<HTMLElement>(null);
  const [sectionRef, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1  = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);
  const y2  = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);
  const rot = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);

  return (
    <section ref={ref} id="dashboard" style={{ background: 'linear-gradient(160deg, #06080f 0%, #080d1f 50%, #10070a 100%)', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '25%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,51,160,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, right: '25%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(114,47,55,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }} ref={sectionRef}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.span initial={{ opacity: 0, y: -20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A96E' }}>
            DADOS EM TEMPO REAL
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: '#fff', marginTop: 12, marginBottom: 12 }}>
            Dashboard de{' '}
            <span style={{ background: 'linear-gradient(135deg, #C9A96E, #E2C48A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Resultados</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', maxWidth: 460, margin: '0 auto' }}>
            Transparência total. Veja os resultados concretos da nossa equipa.
          </motion.p>
        </div>

        {/* Dashboard panel */}
        <motion.div style={{ rotate: rot, perspective: '1200px' }}>
          <motion.div
            style={{ borderRadius: 24, overflow: 'hidden', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(40px)', boxShadow: '0 40px 100px rgba(0,0,0,0.5)', y: y1 }}
          >
            {/* Window chrome */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.2)' }}>
              <div style={{ display: 'flex', gap: 8 }}>
                {['#DA291C','#f59e0b','#22c55e'].map((c, i) => <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />)}
              </div>
              <div style={{ flex: 1, maxWidth: 200, height: 20, borderRadius: 50, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 12px' }}>
                <span style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)' }}>alexandramoreira.remax.pt</span>
              </div>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em' }}>RE/MAX · Dashboard</span>
            </div>

            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, padding: 24 }} className="dash-metrics-grid">
              {metrics.map((m, i) => <DashCard key={i} {...m} delay={0.3 + i * 0.1} inView={inView} />)}
            </div>

            {/* Chart */}
            <motion.div
              style={{ margin: '0 24px 24px', borderRadius: 16, padding: 20, background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.04)' }}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)' }}>Performance Mensal</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.68rem', color: '#4ade80', fontWeight: 600 }}>↑ +32% vs ano anterior</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 64 }}>
                {[40,60,45,70,55,80,65,90,75,85,95,100].map((h, i) => (
                  <motion.div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 3,
                    background: i === 11 ? 'linear-gradient(180deg,#DA291C,#722F37)' : i > 8 ? 'linear-gradient(180deg,#0033A0,#001a6b)' : 'rgba(255,255,255,0.07)',
                    transformOrigin: 'bottom' }}
                    initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}} transition={{ duration: 0.5, delay: 0.9 + i * 0.04, type: 'spring' }}
                  />
                ))}
              </div>
              <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m, i) => (
                  <div key={i} style={{ flex: 1, textAlign: 'center', fontFamily: 'Open Sans, sans-serif', fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)' }}>{m}</div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Side panel */}
          <motion.div style={{ position: 'absolute', right: -16, top: '50%', translateY: '-50%', y: y2 }} className="side-panel-dash">
            <div style={{ borderRadius: 16, padding: 20, width: 176, background: 'rgba(0,51,160,0.18)', border: '1px solid rgba(0,51,160,0.3)', backdropFilter: 'blur(20px)' }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>Avaliação Média</div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#fff', fontSize: '2.5rem', lineHeight: 1, marginBottom: 8 }}>4.9</div>
              <div style={{ display: 'flex', gap: 3, marginBottom: 12 }}>
                {[...Array(5)].map((_,i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#C9A96E"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                ))}
              </div>
              <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)' }}>200+ avaliações</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .dash-metrics-grid { grid-template-columns: repeat(2,1fr) !important; }
          .side-panel-dash   { display: none !important; }
        }
        @media (max-width: 480px) {
          .dash-metrics-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
