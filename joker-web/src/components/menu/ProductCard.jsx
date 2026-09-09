import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext.jsx";
import { formatCurrency } from "../../utils/formatCurrency.js";

export default function ProductCard({ producto }) {
  const { dispatch } = useCart();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group overflow-hidden rounded-xl border border-gold/15 bg-carbon/50 backdrop-blur-sm"
    >
      <div
        className="h-48 w-full bg-cover bg-center opacity-90 transition-opacity group-hover:opacity-100"
        style={{ backgroundImage: `url(${producto.imagen})` }}
      />
      <div className="p-5">
        <p className="text-xs uppercase tracking-wider text-gold">{producto.categoria}</p>
        <h3 className="mt-1 font-display text-lg text-pureWhite">{producto.nombre}</h3>
        <p className="mt-1 text-sm text-silver">{producto.descripcion}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-body font-semibold text-gold">{formatCurrency(producto.precio)}</span>
          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: producto })}
            className="rounded-full border border-gold/40 px-4 py-1.5 text-xs text-gold transition-colors hover:bg-gold hover:text-onyx"
          >
            Agregar
          </button>
        </div>
      </div>
    </motion.div>
  );
}
