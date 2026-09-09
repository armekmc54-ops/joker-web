import eventos from "../../data/events.json";
import EventCard from "./EventCard.jsx";

// Para editar la cartelera semanal, solo modifica src/data/events.json.
// Este componente no necesita cambios cuando cambian los eventos.
export default function EventsBoard() {
  return (
    <section id="eventos" className="bg-onyx px-6 py-24">
      <h2 className="mb-2 text-center font-display text-4xl text-pureWhite">
        Cartelera <span className="text-gold">VIP</span>
      </h2>
      <p className="mb-14 text-center text-silver">Miércoles a Domingo</p>

      <div className="mx-auto flex max-w-3xl flex-col divide-y divide-white/10 rounded-2xl border border-gold/15 bg-carbon/40 backdrop-blur-sm">
        {eventos.map((evento, i) => (
          <EventCard key={evento.dia} evento={evento} index={i} />
        ))}
      </div>
    </section>
  );
}
