import { motion } from "framer-motion";
import { buildGeneralWhatsAppLink } from "../../utils/whatsapp.js";

export default function WhatsAppFloatButton() {
  return (
    <motion.a
      href={buildGeneralWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-carbon/80 text-lg text-gold backdrop-blur-sm shadow-md"
      aria-label="Contactar por WhatsApp"
    >
      ✆
    </motion.a>
  );
}
