import { motion } from "framer-motion";
import { useState } from "react";
import { useCart } from "../../context/CartContext.jsx";
import { formatCurrency } from "../../utils/formatCurrency.js";

function generarCodigoOrden() {
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `JOKER-${random}`;
}

export default function CheckoutModal({ onClose }) {
  const { items, total, dispatch } = useCart();
  const [status, setStatus] = useState("resumen"); // resumen -> procesando -> confirmado
  const [orderCode, setOrderCode] = useState(null);

  const pagar = async () => {
    setStatus("procesando");
    // TODO: reemplazar con la llamada real a tu pasarela (Stripe, Conekta, MercadoPago, etc.)
    await new Promise((r) => setTimeout(r, 1600));
    setOrderCode(generarCodigoOrden());
    setStatus("confirmado");
    dispatch({ type: "CLEAR" });
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-onyx/90 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-[90%] max-w-md rounded-2xl border border-gold/30 bg-carbon p-8"
      >
        {status === "resumen" && (
          <>
            <h3 className="mb-4 font-display text-xl text-pureWhite">Confirmar orden</h3>
            {items.map((i) => (
              <div key={i.id} className="flex justify-between py-1 text-sm text-silver">
                <span>{i.qty}x {i.nombre}</span>
                <span>{formatCurrency(i.precio * i.qty)}</span>
              </div>
            ))}
            <div className="mt-4 flex justify-between border-t border-white/10 pt-3 font-semibold text-gold">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
            <button
              onClick={pagar}
              className="mt-6 w-full rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark py-3 font-semibold text-onyx"
            >
              Pagar en línea
            </button>
            <button onClick={onClose} className="mt-3 w-full text-xs text-silver underline">
              Cancelar
            </button>
          </>
        )}

        {status === "procesando" && (
          <p className="py-8 text-center text-silver">Procesando tu pago…</p>
        )}

        {status === "confirmado" && (
          <div className="text-center">
            <p className="mb-2 text-sm text-silver">Presenta este código en barra:</p>
            <p className="font-display text-3xl tracking-widest text-gold">{orderCode}</p>
            <p className="mt-4 text-xs text-silver">
              Tu orden estará lista para recoger en aproximadamente 10 minutos.
            </p>
            <button onClick={onClose} className="mt-6 text-sm text-silver underline">
              Cerrar
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
