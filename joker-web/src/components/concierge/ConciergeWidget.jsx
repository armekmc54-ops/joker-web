import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getConciergeResponse } from "./conciergeLogic.js";
import ChatBubble from "./ChatBubble.jsx";

export default function ConciergeWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Buenas noches. Soy el Concierge de Joker. ¿Puedo ayudarte con reservaciones, el código de vestimenta o nuestro menú?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input };
    const historial = [...messages, userMsg];
    setMessages(historial);
    setInput("");
    setLoading(true);

    const reply = await getConciergeResponse(historial);
    setMessages((m) => [...m, { role: "bot", text: reply }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="mb-4 flex h-[480px] w-[340px] flex-col overflow-hidden rounded-2xl border border-gold/30 bg-carbon/95 shadow-gold backdrop-blur-lg"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="font-display text-gold">🃏</span>
              <p className="font-display text-sm text-pureWhite">El Concierge</p>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
              {messages.map((m, i) => (
                <ChatBubble key={i} role={m.role} text={m.text} />
              ))}
              {loading && <p className="text-xs text-silver">Escribiendo…</p>}
              <div ref={endRef} />
            </div>

            <div className="flex gap-2 border-t border-white/10 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Escribe tu pregunta…"
                className="flex-1 rounded-full bg-white/5 px-4 py-2 text-sm text-pureWhite outline-none placeholder:text-silver/50"
              />
              <button
                onClick={send}
                className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-onyx"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-carbon text-2xl shadow-gold"
        aria-label="Abrir chat del Concierge"
      >
        🃏
      </motion.button>
    </div>
  );
}
