import faq from "../../data/faq.json";

const REGLAS = [
  {
    keywords: ["vestimenta", "dress code", "código de vestir", "ropa"],
    respuesta:
      "El código de vestimenta es elegante casual: camisa o blusa, calzado cerrado. Evitamos tenis deportivos, shorts y gorras.",
  },
  {
    keywords: ["reserva", "mesa", "apartar"],
    respuesta:
      "Puedes reservar tu mesa desde la sección 'Reservas' del sitio, indicando fecha, hora y número de personas. Para eventos privados también podemos rentar el lugar completo.",
  },
  {
    keywords: ["pedido", "click and collect", "recoger", "pagar en línea", "orden"],
    respuesta:
      "En 'Menú' seleccionas tus productos, pagas en línea y recibes un código de orden único. Solo lo presentas en barra para recoger, sin filas.",
  },
  {
    keywords: ["horario", "abren", "cierran", "hora"],
    respuesta:
      "Abrimos de miércoles a domingo. Miércoles 21:00-01:00, jueves 20:00-02:00, viernes 22:00-03:00, sábado 22:00-04:00 y domingo 18:00-23:00.",
  },
  {
    keywords: ["menú", "carta", "coctel", "cerveza", "michelada"],
    respuesta:
      "Nuestro menú incluye coctelería de autor, cervecería artesanal y botanas para maridaje. Puedes verlo completo y ordenar en la sección 'Menú'.",
  },
];

function respuestaLocal(mensaje) {
  const texto = mensaje.toLowerCase();
  const regla = REGLAS.find((r) => r.keywords.some((k) => texto.includes(k)));
  return regla?.respuesta ?? null;
}

function buildSystemPrompt() {
  return `Eres "El Concierge", el anfitrión virtual de Cervecería Joker, un speakeasy de lujo.
Tono: elegante, cálido, ligeramente enigmático (referencias sutiles a la carta del Joker, nunca al personaje de cómic).
Conoces: código de vestimenta, reglas de reservación, funcionamiento de pedidos en línea (pagar y recoger en barra), y estos datos: ${JSON.stringify(faq)}.
Nunca inventes precios o eventos que no estén en tus datos. Si no sabes algo, invita a escribir por WhatsApp.
Responde siempre en español, en máximo 3 líneas.`;
}

// Intenta responder con reglas locales primero (rápido y gratis).
// Si no hay match, escala a tu backend, que llama a la API de Claude/OpenAI
// con la API key protegida del lado del servidor.
export async function getConciergeResponse(historial) {
  const ultimoMensaje = historial[historial.length - 1].text;
  const local = respuestaLocal(ultimoMensaje);
  if (local) return local;

  try {
    const res = await fetch("/api/concierge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ historial, systemPrompt: buildSystemPrompt() }),
    });
    const data = await res.json();
    return data.reply;
  } catch {
    return "Disculpa, tuve un problema para responder. ¿Puedes intentar de nuevo o escribirnos por WhatsApp?";
  }
}
