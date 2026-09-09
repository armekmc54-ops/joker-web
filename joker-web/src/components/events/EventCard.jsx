import { motion } from "framer-motion";

export default function EventCard({ evento, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`flex items-center justify-between px-8 py-6 ${
        evento.destacado ? "bg-gold/5" : ""
      }`}
    >
      <div>
        <p className="text-xs uppercase tracking-widest text-gold">{evento.dia}</p>
        <h3 className="font-display text-lg text-pureWhite">{evento.titulo}</h3>
      </div>
      <div className="text-right">
        <p className="text-sm text-silver">{evento.hora}</p>
        {evento.destacado && (
          <span className="mt-1 inline-block rounded-full border border-gold/40 px-3 py-0.5 text-[10px] text-gold">
            Destacado
          </span>
        )}
      </div>
    </motion.div>
  );
}
