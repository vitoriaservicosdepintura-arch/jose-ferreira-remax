import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WA_NUMBER = '351968211120';
const WA_MESSAGE = 'Olá Alexandra! 👋 Vim pelo site e gostaria de saber mais informações.';
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

export default function WhatsAppFloat() {
    const [showCard, setShowCard] = useState(false);
    const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    /* ---------- Helpers ---------- */
    const show = () => {
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        setShowCard(true);
    };

    const hide = () => {
        setShowCard(false);
    };

    // On touch devices: show on touchstart, hide after 2.5 s
    const handleTouchStart = () => {
        show();
        hideTimerRef.current = setTimeout(() => setShowCard(false), 2500);
    };

    return (
        <>
            {/* Floating wrapper */}
            <div className="wa-float-wrapper">

                {/* Hover / Touch card */}
                <AnimatePresence>
                    {showCard && (
                        <motion.div
                            className="wa-card"
                            initial={{ opacity: 0, y: 12, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 12, scale: 0.9 }}
                            transition={{ duration: 0.25, type: 'spring', stiffness: 220, damping: 20 }}
                            style={{
                                background: 'rgba(13,13,26,0.96)',
                                backdropFilter: 'blur(14px)',
                                border: '1px solid rgba(201,169,110,0.3)',
                                borderRadius: 20,
                                padding: '16px 22px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 14,
                                boxShadow: '0 20px 50px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,169,110,0.1)',
                                minWidth: 220,
                                marginBottom: 12,
                            }}
                        >
                            {/* Foto */}
                            <div style={{ position: 'relative', flexShrink: 0 }}>
                                <img
                                    src="/images/alexandra-hero.png"
                                    alt="Alexandra Moreira"
                                    style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        objectPosition: 'top',
                                        border: '2px solid #25D366',
                                    }}
                                />
                                {/* Online dot */}
                                <span style={{
                                    position: 'absolute',
                                    bottom: 2,
                                    right: 2,
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    background: '#25D366',
                                    border: '2px solid #0d0d1a',
                                }} />
                            </div>

                            {/* Info */}
                            <div>
                                <p style={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontWeight: 700,
                                    fontSize: '0.82rem',
                                    color: '#fff',
                                    margin: 0,
                                    lineHeight: 1.3,
                                }}>
                                    Alexandra Moreira
                                </p>
                                <p style={{
                                    fontFamily: 'Open Sans, sans-serif',
                                    fontSize: '0.68rem',
                                    color: '#25D366',
                                    margin: '3px 0 6px',
                                    fontWeight: 600,
                                }}>
                                    ● Online agora
                                </p>
                                <p style={{
                                    fontFamily: 'Open Sans, sans-serif',
                                    fontSize: '0.67rem',
                                    color: 'rgba(255,255,255,0.5)',
                                    margin: 0,
                                }}>
                                    +351 968 211 120
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pulse rings + button */}
                <div style={{ position: 'relative', width: 64, height: 64 }}>
                    <div className="wa-ring wa-ring-1" />
                    <div className="wa-ring wa-ring-2" />

                    <motion.a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        /* Desktop hover */
                        onHoverStart={show}
                        onHoverEnd={hide}
                        /* Mobile touch */
                        onTouchStart={handleTouchStart}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.94 }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #25D366, #128C7E)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 30px rgba(37,211,102,0.45), 0 4px 12px rgba(0,0,0,0.3)',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}
                        aria-label="Contactar via WhatsApp"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="#ffffff"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </motion.a>
                </div>
            </div>

            <style>{`
        /* === Wrapper === */
        .wa-float-wrapper {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 9998;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        /* === Mobile: move closer to edge === */
        @media (max-width: 768px) {
          .wa-float-wrapper {
            bottom: 24px;
            right: 12px;
          }
          .wa-card {
            right: 0;
            min-width: 200px !important;
          }
        }

        /* === Pulse rings === */
        .wa-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
        }
        .wa-ring-1 {
          background: rgba(37, 211, 102, 0.25);
          animation: wa-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .wa-ring-2 {
          background: rgba(37, 211, 102, 0.15);
          animation: wa-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite 0.75s;
        }

        @keyframes wa-ping {
          0%   { transform: scale(1);   opacity: 0.8; }
          70%  { transform: scale(2.2); opacity: 0;   }
          100% { transform: scale(2.2); opacity: 0;   }
        }
      `}</style>
        </>
    );
}
