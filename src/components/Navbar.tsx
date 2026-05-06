import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: 'hero' },
  { label: 'Sobre Mim', href: 'autoridade' },
  { label: 'Serviços', href: 'servicos' },
  { label: 'Contacto', href: 'contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ paddingTop: scrolled ? 16 : 0, transition: 'padding 0.4s ease' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', pointerEvents: 'auto' }}>
          <div
            className="fixed-container"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              height: scrolled ? 68 : 88,
              padding: '0 32px',
              background: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'transparent',
              backdropFilter: scrolled ? 'blur(16px)' : 'none',
              borderRadius: scrolled ? 80 : 0,
              boxShadow: scrolled ? '0 20px 40px rgba(0, 0, 0, 0.08)' : 'none',
              border: scrolled ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >

            {/* Logo */}
            <motion.div
              onClick={() => go('hero')}
              className="navbar-logo-container"
              style={{
                cursor: 'pointer',
                position: 'absolute',
                left: 32,
                zIndex: 100,
                display: 'flex',
                alignItems: 'center'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src="/images/remax-logo.png"
                alt="RE/MAX"
                className="navbar-logo-img"
                style={{
                  height: scrolled ? 110 : 150,
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.25))',
                  transition: 'all 0.4s ease'
                }}
              />
            </motion.div>

            {/* Spacer for Logo */}
            <div style={{ width: 220, pointerEvents: 'none' }} className="desktop-nav" />

            {/* Desktop nav */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'Montserrat, sans-serif', fontWeight: 600,
                    fontSize: '0.8rem', color: scrolled ? '#333' : '#1a1a1a',
                    letterSpacing: '0.04em', padding: '4px 0', position: 'relative',
                    transition: 'color 0.2s',
                  }}
                  className="nav-link-btn"
                >
                  {link.label}
                </button>
              ))}
              <motion.a
                href="tel:+351968211120"
                className="btn-primary"
                style={{ padding: '10px 22px', fontSize: '0.78rem', borderRadius: 4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone size={14} /> CONTACTAR
              </motion.a>
            </nav>

            {/* Mobile burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none' }}
              className="mobile-burger"
            >
              <span style={{ display: 'block', width: 24, height: 2, background: '#1a1a1a', marginBottom: 5, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
              <span style={{ display: 'block', width: 24, height: 2, background: '#1a1a1a', marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
              <span style={{ display: 'block', width: 24, height: 2, background: '#1a1a1a', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: scrolled ? 80 : 88, left: 16, right: 16, zIndex: 100,
              background: '#0033A0',
              padding: '24px', borderRadius: 24,
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
            }}
          >
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'Montserrat, sans-serif', fontWeight: 700,
                  fontSize: '1.1rem', color: '#fff', padding: '14px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+351968211120"
              style={{
                display: 'block', marginTop: 20,
                background: '#DA291C', color: '#fff', textAlign: 'center',
                padding: '14px', borderRadius: 8, textDecoration: 'none',
                fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem',
              }}
            >
              CONTACTAR AGORA
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav  { display: none !important; }
          .mobile-burger{ display: block !important; }
          .navbar-logo-img { height: ${scrolled ? '100px' : '130px'} !important; }
          .navbar-logo-container { position: relative !important; left: 0 !important; }
          .fixed-container { padding: 0 16px !important; height: ${scrolled ? '72px' : '100px'} !important; }
        }
        .nav-link-btn::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: #DA291C;
          transition: width 0.3s ease;
        }
        .nav-link-btn:hover { color: #DA291C !important; }
        .nav-link-btn:hover::after { width: 100%; }
      `}</style>
    </>
  );
}
