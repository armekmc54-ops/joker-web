export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-carbon px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="mb-3 font-display text-xl tracking-widest text-gold">JOKER</p>
          <p className="text-sm text-silver">
            Av. Ejemplo 123, Centro Histórico
            <br />
            San Luis Potosí, S.L.P.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Ubicación Cervecería Joker"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0!2d-100.9855!3d22.1565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1"
              width="100%"
              height="180"
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div>
          <p className="mb-3 font-display text-lg text-pureWhite">Horarios</p>
          <ul className="space-y-1 text-sm text-silver">
            <li>Miércoles — 21:00 a 01:00</li>
            <li>Jueves — 20:00 a 02:00</li>
            <li>Viernes — 22:00 a 03:00</li>
            <li>Sábado — 22:00 a 04:00</li>
            <li>Domingo — 18:00 a 23:00</li>
            <li className="text-silver/50">Lunes y martes — cerrado</li>
          </ul>
        </div>

        <div>
          <p className="mb-3 font-display text-lg text-pureWhite">Síguenos</p>
          <div className="flex gap-4 text-sm text-silver">
            <a href="#" className="hover:text-gold">Instagram</a>
            <a href="#" className="hover:text-gold">Facebook</a>
            <a href="#" className="hover:text-gold">TikTok</a>
          </div>
          <a href="#" className="mt-6 block text-xs text-silver/60 underline hover:text-gold">
            Aviso de privacidad
          </a>
        </div>
      </div>

      <p className="mt-12 text-center text-xs text-silver/40">
        © {new Date().getFullYear()} Cervecería Joker. Consumo responsable. Prohibida la venta a menores de edad.
      </p>
    </footer>
  );
}
