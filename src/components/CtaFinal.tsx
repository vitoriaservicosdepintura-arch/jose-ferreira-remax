import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, User, Home, BadgeDollarSign, BarChart3, MessageCircle, Clock, Globe } from 'lucide-react';

const categories = [
  { id: 'compra', label: 'Comprar', icon: <Home size={18} /> },
  { id: 'venda', label: 'Vender', icon: <BadgeDollarSign size={18} /> },
  { id: 'investir', label: 'Investir', icon: <BarChart3 size={18} /> },
  { id: 'info', label: 'Mais Informações', icon: <MessageCircle size={18} /> },
];

export default function CtaFinal() {
  const ref = useRef<HTMLElement>(null);
  const [sectionRef, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const [selectedCategory, setSelectedCategory] = useState('compra');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('userName') as HTMLInputElement).value;
    const email = (form.elements.namedItem('userEmail') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('userPhone') as HTMLInputElement).value;

    const categoryIcons: { [key: string]: string } = {
      compra: '🏠 COMPRA',
      venda: '💰 VENDA',
      investir: '📈 INVESTIR',
      info: 'ℹ️ MAIS INFORMAÇÕES'
    };

    const interestText = categoryIcons[selectedCategory] || selectedCategory.toUpperCase();

    const message = `Olá Alexandra! 👋%0A%0AVim pelo site: *alexandraconsultoraremax.vercel.app*%0A%0A*Dados do Cliente:*%0A👤 Nome: ${name}%0A📧 Email: ${email}%0A📞 Telefone: ${phone}%0A%0A*Interesse:*%0A📌 ${interestText}`;

    window.open(`https://wa.me/351968211120?text=${message}`, '_blank');
  };

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.4]);
  const textY = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);

  return (
    <section
      ref={ref}
      id="contacto"
      style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '60px 0' }}
    >
      {/* RE/MAX Red bg */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #DA291C 0%, #b31d16 50%, #8c120e 100%)' }} />

      {/* Alexandra photo background */}
      <motion.div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', scale: photoScale, opacity: photoOpacity }}>
        <img
          src="/images/alexandra-hero.png"
          alt=""
          className="cta-photo-bg"
          style={{
            position: 'absolute', right: 0, bottom: 0, height: '100%', objectFit: 'cover', objectPosition: 'top', maxWidth: '45%',
            maskImage: 'linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* Dark overlay (subtle) */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(218,41,28,0.92) 0%, rgba(218,41,28,0.7) 60%, transparent 100%)', pointerEvents: 'none' }} />

      {/* Dots */}
      <div className="dots-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10, width: '100%' }} ref={sectionRef}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="cta-grid">

          {/* Left Column — Text */}
          <div style={{ maxWidth: 520 }}>
            <motion.span
              initial={{ opacity: 0, y: -15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
              style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}
            >
              PRONTO PARA ENCONTRAR O SEU IMÓVEL?
            </motion.span>

            <motion.h2
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#fff', lineHeight: 1.1, marginBottom: 24, y: textY }}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 100 }}
            >
              Compre, Venda ou Invista com a{' '}
              <span style={{ color: '#0033A0', textShadow: '0 0 20px rgba(0,51,160,0.3)' }}>
                Estratégia Certa.
              </span>
            </motion.h2>

            <motion.div className="divider-gold" style={{ marginBottom: 28, background: 'linear-gradient(90deg, #E2C48A, #C9A96E, #E2C48A)' }}
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }} />

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}
              style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 32 }}
            >
              Segurança e acompanhamento especializado em cada etapa do seu investimento.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 40 }}
            >
              <Clock size={16} color="#E2C48A" />
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.82rem', color: '#E2C48A' }}>
                As grandes oportunidades do mercado são únicas. Fale conosco hoje.
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.8 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24 }}
              className="contact-info-grid-small"
            >
              {[
                { icon: <Phone size={14} />, label: 'Telefone', value: '+351 968 211 120', href: 'tel:+351968211120', hColor: '#25D366' },
                { icon: <Mail size={14} />, label: 'Email', value: 'alexandramoreira@remax.pt', href: 'mailto:alexandramoreira@remax.pt', hColor: '#0033A0' },
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>, label: 'Instagram', value: '@alexandramoreira_remax', href: 'https://instagram.com/alexandramoreira_remax', hColor: '#E1306C' },
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>, label: 'Facebook', value: 'Equipa Facebook', href: 'https://www.facebook.com/profile.php?id=61556151421865', hColor: '#1877F2' },
                { icon: <Globe size={14} />, label: 'Website', value: 'Perfil RE/MAX', href: 'https://remax.pt/pt/agente/alexandra-moreira/126421025', hColor: '#C9A96E' },
              ].map((c, i) => (
                <a key={i} href={c.href} target={c.href.startsWith('http') || c.href.startsWith('mailto:') ? '_blank' : undefined} rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'flex-start', gap: 10, textDecoration: 'none' }}>
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8, backgroundColor: c.hColor, borderColor: 'rgba(255,255,255,0.4)' }}
                    style={{ flexShrink: 0, width: 34, height: 34, borderRadius: 10, background: 'rgba(255,255,255,0.1)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2, border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.3s ease' }}
                  >
                    {c.icon}
                  </motion.div>
                  <div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>{c.label}</div>
                    <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.72rem', color: '#fff', fontWeight: 600 }}>{c.value}</div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column — Form with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            {/* Glow border effect */}
            <div style={{
              position: 'absolute', inset: -2, borderRadius: 24,
              background: 'linear-gradient(135deg, #0033A0, #DA291C, #C9A96E, #0033A0)',
              filter: 'blur(8px)', opacity: 0.6, zIndex: -1
            }} className="animate-pulse-slow" />

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(16px)',
              borderRadius: 22,
              padding: '32px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
            }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#fff', marginBottom: 24 }}>
                Envie-nos uma Mensagem
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ position: 'relative' }}>
                  <User style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', opacity: 0.5, color: '#fff' }} size={18} />
                  <input name="userName" type="text" placeholder="Nome Completo" required style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '14px 14px 14px 44px', color: '#fff', fontFamily: 'Open Sans, sans-serif', fontSize: '0.9rem', outline: 'none' }} />
                </div>
                <div style={{ position: 'relative' }}>
                  <Mail style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', opacity: 0.5, color: '#fff' }} size={18} />
                  <input name="userEmail" type="email" placeholder="E-mail" required style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '14px 14px 14px 44px', color: '#fff', fontFamily: 'Open Sans, sans-serif', fontSize: '0.9rem', outline: 'none' }} />
                </div>
                <div style={{ position: 'relative' }}>
                  <Phone style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', opacity: 0.5, color: '#fff' }} size={18} />
                  <input name="userPhone" type="tel" placeholder="Telefone" required style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '14px 14px 14px 44px', color: '#fff', fontFamily: 'Open Sans, sans-serif', fontSize: '0.9rem', outline: 'none' }} />
                </div>

                <div style={{ marginTop: 8 }}>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginBottom: 12 }}>Tenho interesse em:</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
                          borderRadius: 10, border: '1px solid',
                          background: selectedCategory === cat.id ? 'rgba(0, 51, 160, 0.3)' : 'rgba(255,255,255,0.03)',
                          borderColor: selectedCategory === cat.id ? '#0033A0' : 'rgba(255,255,255,0.1)',
                          color: '#fff', fontFamily: 'Open Sans, sans-serif', fontSize: '0.78rem',
                          cursor: 'pointer', transition: 'all 0.2s ease', textAlign: 'left'
                        }}
                      >
                        <span style={{ color: selectedCategory === cat.id ? '#fff' : 'rgba(255,255,255,0.5)' }}>{cat.icon}</span>
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ marginTop: 8, padding: '16px', borderRadius: 12, background: 'linear-gradient(90deg, #0033A0, #001a6b)', color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', border: 'none', cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
                >
                  ENVIAR SOLICITAÇÃO
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cta-grid { grid-template-columns: 1fr !important; gap: 48px; }
          .cta-grid > div { max-width: 100% !important; text-align: center; }
          .divider-gold { margin: 0 auto 28px !important; }
          .contact-info-grid-small { grid-template-columns: 1fr !important; gap: 16px !important; text-align: left; }
          .cta-photo-bg { maxWidth: 100% !important; opacity: 0.15 !important; }
        }
        @media (max-width: 480px) {
          .cta-grid > div h2 { font-size: 1.8rem !important; }
        }
        .animate-pulse-slow {
          animation: pulse-border 4s infinite ease-in-out;
        }
        @keyframes pulse-border {
          0%, 100% { opacity: 0.4; filter: blur(8px); }
          50% { opacity: 0.7; filter: blur(12px); }
        }
      `}</style>
    </section>
  );
}

