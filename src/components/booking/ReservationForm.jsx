import { useState } from "react";
import { motion } from "framer-motion";
import { buildReservationWhatsAppLink } from "../../utils/whatsapp.js";

export default function ReservationForm() {
  const [form, setForm] = useState({
    nombre: "",
    fecha: "",
    hora: "",
    personas: 2,
    tipoEvento: "mesa", // "mesa" | "privado"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const link = buildReservationWhatsAppLink(form);
    window.open(link, "_blank");
  };

  return (
    <section id="reservas" className="bg-carbon px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-xl rounded-2xl border border-gold/20 bg-onyx/60 p-8 backdrop-blur-sm"
      >
        <h2 className="mb-2 text-center font-display text-3xl text-pureWhite">
          Reserva tu <span className="text-gold">experiencia</span>
        </h2>
        <p className="mb-8 text-center text-sm text-silver">
          Completa el formulario y confirmaremos por WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            name="nombre"
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-pureWhite outline-none placeholder:text-silver/50 focus:border-gold/50"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              required
              type="date"
              name="fecha"
              value={form.fecha}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-pureWhite outline-none focus:border-gold/50"
            />
            <input
              required
              type="time"
              name="hora"
              value={form.hora}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-pureWhite outline-none focus:border-gold/50"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs text-silver">Número de personas</label>
            <input
              required
              type="number"
              min="1"
              name="personas"
              value={form.personas}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-pureWhite outline-none focus:border-gold/50"
            />
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-gold/20 bg-gold/5 px-4 py-3">
            <input
              type="checkbox"
              id="privado"
              checked={form.tipoEvento === "privado"}
              onChange={(e) =>
                setForm((f) => ({ ...f, tipoEvento: e.target.checked ? "privado" : "mesa" }))
              }
              className="h-4 w-4 accent-gold"
            />
            <label htmlFor="privado" className="text-sm text-silver">
              Quiero rentar el lugar completo para un evento privado
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark py-3 text-sm font-semibold text-onyx transition-shadow hover:shadow-goldHover"
          >
            Confirmar por WhatsApp
          </button>
        </form>
      </motion.div>
    </section>
  );
}
