import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="top" className="relative flex h-screen items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        poster="/assets/img/hero-poster.jpg"
      >
        <source src="/assets/video/hero-loop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/60 via-onyx/70 to-onyx" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-6 text-center"
      >
        <p className="mb-4 font-display text-6xl tracking-[0.2em] text-gold md:text-8xl">
          JOKER
        </p>
        <p className="mx-auto mb-10 max-w-md text-sm text-silver md:text-base">
          Coctelería de autor y cervecería artesanal en un ambiente que solo se descubre una vez que cruzas la puerta.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#menu"
            className="rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark px-8 py-3 text-sm font-semibold text-onyx transition-shadow hover:shadow-goldHover"
          >
            Ordena ahora
          </a>
          <a
            href="#reservas"
            className="rounded-full border border-gold/40 px-8 py-3 text-sm text-gold transition-colors hover:bg-gold/10"
          >
            Reserva tu mesa
          </a>
        </div>
      </motion.div>
    </section>
  );
}
