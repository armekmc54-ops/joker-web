import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useCart } from "../../context/CartContext.jsx";
import { formatCurrency } from "../../utils/formatCurrency.js";
import CheckoutModal from "./CheckoutModal.jsx";

export default function CartDrawer({ onClose }) {
  const { items, total, dispatch } = useCart();
  const [checkout, setCheckout] = useState(false);

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/60" onClick={onClose} />
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-gold/20 bg-carbon p-6"
      >
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-display text-xl text-pureWhite">Tu carrito</h3>
          <button onClick={onClose} className="text-silver hover:text-gold">✕</button>
        </div>

        {items.length === 0 ? (
          <p className="text-sm text-silver">Aún no has agregado nada.</p>
        ) : (
          <div className="flex-1 space-y-4 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <p className="text-sm text-pureWhite">{item.nombre}</p>
                  <p className="text-xs text-silver">{formatCurrency(item.precio)} c/u</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
                    className="h-6 w-6 rounded-full border border-white/20 text-xs text-silver"
                  >
                    −
                  </button>
                  <span className="text-sm text-pureWhite">{item.qty}</span>
                  <button
                    onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}
                    className="h-6 w-6 rounded-full border border-white/20 text-xs text-silver"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 border-t border-white/10 pt-4">
          <div className="mb-4 flex justify-between font-semibold text-gold">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
          <button
            disabled={items.length === 0}
            onClick={() => setCheckout(true)}
            className="w-full rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark py-3 text-sm font-semibold text-onyx disabled:opacity-40"
          >
            Pagar en línea
          </button>
        </div>
      </motion.aside>

      <AnimatePresence>
        {checkout && (
          <CheckoutModal
            onClose={() => {
              setCheckout(false);
              onClose();
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
