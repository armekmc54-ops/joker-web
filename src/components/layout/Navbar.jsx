import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext.jsx";

const LINKS = [
  { href: "#menu", label: "Menú" },
  { href: "#eventos", label: "Eventos" },
  { href: "#reservas", label: "Reservas" },
];

export default function Navbar({ onCartClick }) {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-30 w-full transition-colors duration-500 ${
        scrolled ? "bg-onyx/90 backdrop-blur-md border-b border-gold/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-2xl tracking-widest text-gold">
          JOKER
        </a>

        <div className="hidden gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-silver transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={onCartClick}
          className="relative rounded-full border border-gold/30 px-4 py-2 text-sm text-gold transition-colors hover:bg-gold/10"
        >
          Carrito
          {count > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-semibold text-onyx">
              {count}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}
