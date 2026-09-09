import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AgeGateModal() {
  const [verified, setVerified] = useState(true); // evita flash antes de leer localStorage
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    const ok = localStorage.getItem("joker_age_verified");
    setVerified(ok === "true");
  }, []);

  const confirm = () => {
    localStorage.setItem("joker_age_verified", "true");
    setVerified(true);
  };

  if (verified) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-onyx/95 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {!denied ? (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[90%] max-w-md rounded-2xl border border-gold/30 bg-carbon/60 p-10 text-center shadow-gold"
          >
            <p className="mb-2 font-display text-3xl tracking-widest text-gold">JOKER</p>
            <h2 className="mb-3 font-display text-xl text-pureWhite">
              Una experiencia solo para adultos
            </h2>
            <p className="mb-8 text-sm text-silver">
              Debes ser mayor de edad para ingresar. Confirma tu edad para continuar.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirm}
                className="rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark px-8 py-3 font-body text-sm font-semibold text-onyx transition-shadow hover:shadow-goldHover"
              >
                Soy mayor de edad
              </button>
              <button
                onClick={() => setDenied(true)}
                className="rounded-full border border-white/15 px-8 py-3 font-body text-sm text-silver transition-colors hover:border-gold/40 hover:text-pureWhite"
              >
                Soy menor
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center px-6">
            <p className="font-display text-2xl text-pureWhite">
              Lo sentimos, este sitio es exclusivo para mayores de edad.
            </p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
