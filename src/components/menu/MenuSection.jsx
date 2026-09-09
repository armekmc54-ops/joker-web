import { useState, useMemo } from "react";
import productos from "../../data/menu.json";
import ProductCard from "./ProductCard.jsx";
import CartDrawer from "./CartDrawer.jsx";

export default function MenuSection({ cartOpen, setCartOpen }) {
  const categorias = useMemo(() => ["Todos", ...new Set(productos.map((p) => p.categoria))], []);
  const [filtro, setFiltro] = useState("Todos");

  const visibles =
    filtro === "Todos" ? productos : productos.filter((p) => p.categoria === filtro);

  return (
    <section id="menu" className="bg-onyx px-6 py-24">
      <h2 className="mb-2 text-center font-display text-4xl text-pureWhite">
        Nuestra <span className="text-gold">Selección</span>
      </h2>
      <p className="mb-10 text-center text-silver">
        Ordena en línea, paga y pasa a recoger directo a la barra.
      </p>

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltro(cat)}
            className={`rounded-full border px-5 py-1.5 text-sm transition-colors ${
              filtro === cat
                ? "border-gold bg-gold/10 text-gold"
                : "border-white/15 text-silver hover:border-gold/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibles.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>

      {cartOpen && <CartDrawer onClose={() => setCartOpen(false)} />}
    </section>
  );
}
