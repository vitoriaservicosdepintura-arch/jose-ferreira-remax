import { motion } from 'framer-motion';

const items = [
  '✦ Compra & Venda de Imóveis',
  '✦ Investimento Imobiliário',
  '✦ Avaliação de Mercado',
  '✦ Negociação Profissional',
  '✦ RE/MAX DinâmicaDaire',
  '✦ Equipa José Ferreira & Alexandra Moreira',
  '✦ Consultoria Exclusiva',
  '✦ Imóveis de Alto Padrão',
  '✦ Gestão de Propriedades',
  '✦ Arrendamento',
];

export default function TickerBand() {
  const repeated = [...items, ...items];
  return (
    <div style={{ background: 'linear-gradient(90deg, #0033A0, #001a6b)', padding: '14px 0', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 64, background: 'linear-gradient(90deg, #0033A0, transparent)', zIndex: 2 }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 64, background: 'linear-gradient(-90deg, #001a6b, transparent)', zIndex: 2 }} />
      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <motion.div
          style={{ display: 'inline-flex', gap: 48 }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          {repeated.map((item, i) => (
            <span
              key={i}
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.9)', flexShrink: 0 }}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
