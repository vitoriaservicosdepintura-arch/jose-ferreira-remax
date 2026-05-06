import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <footer ref={ref} style={{ background: '#0d0d1a', position: 'relative', overflow: 'hidden', padding: '64px 0 32px' }}>
      {/* Gold top border */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48, marginBottom: 48 }} className="footer-grid">

          {/* Logo col */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <img src="/images/remax-logo.png" alt="RE/MAX DinâmicaDaire" className="footer-logo-main" style={{ height: 100, width: 'auto', objectFit: 'contain', marginBottom: 24, filter: 'brightness(1.2)' }} />
            <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
              Equipa José Ferreira & Alexandra Moreira — comprometida com a excelência no mercado imobiliário.
            </p>
          </motion.div>

          {/* Nav col */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>Navegação</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['hero', 'Início'], ['autoridade', 'Sobre a Alexandra'], ['servicos', 'Serviços'], ['contacto', 'Contacto']].map(([id, label]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A96E', flexShrink: 0 }} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact col */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>Contactos</h4>
            <ul className="footer-contacts-grid" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px 24px' }}>
              {[
                { icon: <Phone size={13} />, href: 'tel:+351968211120', text: '+351 968 211 120', bg: 'rgba(218,41,28,0.15)', color: '#DA291C' },
                { icon: <Mail size={13} />, href: 'mailto:alexandramoreira@remax.pt', text: 'alexandramoreira@remax.pt', bg: 'rgba(0,51,160,0.15)', color: '#0033A0' },
                {
                  icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
                  href: 'https://instagram.com/alexandramoreira_remax',
                  text: '@alexandramoreira_remax',
                  bg: 'rgba(114,47,55,0.15)', color: '#C9A96E',
                },
                {
                  icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
                  href: 'https://www.facebook.com/profile.php?id=61556151421865',
                  text: 'Facebook Equipa',
                  bg: 'rgba(0,51,160,0.1)', color: '#0033A0'
                },
                {
                  icon: <Globe size={13} />,
                  href: 'https://remax.pt/pt/agente/alexandra-moreira/126421025',
                  text: 'Perfil RE/MAX',
                  bg: 'rgba(201,169,110,0.1)', color: '#C9A96E'
                },
                {
                  icon: <MapPin size={13} />,
                  href: 'https://maps.google.com/?q=RE+MAX+Dinamica+Daire+Rua+Padre+Americo+3B+3600-132+Castro+Daire',
                  text: 'RE/MAX Dinâmica Daire · Rua Padre Américo, nº 3 B · 3600-132, Castro Daire',
                  bg: 'rgba(218,41,28,0.12)', color: '#DA291C'
                },
              ].map((c, i) => (
                <li key={i}>
                  <a
                    href={c.href} target={c.href.startsWith('http') || c.href.startsWith('mailto:') ? '_blank' : undefined} rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', fontFamily: 'Open Sans, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: c.bg, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {c.icon}
                    </div>
                    {c.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }}
          className="footer-bottom-bar"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap', gap: 24 }}
        >
          <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            © {new Date().getFullYear()} RE/MAX DinâmicaDaire · Equipa José Ferreira & Alexandra Moreira. Todos os direitos reservados.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <img src="/images/remax-balloon.png" alt="RE/MAX" style={{ height: 54, width: 'auto', objectFit: 'contain', opacity: 0.6, filter: 'brightness(1.2)' }} />
            <img src="/images/LOGO2-sem-fundo.png" alt="Equipa Imobiliária" style={{ height: 48, width: 'auto', objectFit: 'contain', filter: 'brightness(1.1)' }} />
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) { 
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; text-align: center; } 
          .footer-contacts-grid { grid-template-columns: 1fr !important; }
          .footer-bottom-bar { justify-content: center !important; text-align: center; gap: 32px !important; }
          .footer-logo-main { margin: 0 auto 24px !important; }
        }
      `}</style>
    </footer>
  );
}
