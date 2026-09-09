const NUMERO_WHATSAPP = "521XXXXXXXXXX"; // TODO: reemplazar con el número real, con lada país

export function buildReservationWhatsAppLink({ nombre, fecha, hora, personas, tipoEvento }) {
  const mensaje =
    tipoEvento === "privado"
      ? `Hola, soy ${nombre}. Quiero cotizar la renta del lugar completo para un evento privado el ${fecha} a las ${hora}, para aproximadamente ${personas} personas.`
      : `Hola, soy ${nombre}. Quiero reservar una mesa para ${personas} personas el ${fecha} a las ${hora}.`;

  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

export function buildGeneralWhatsAppLink() {
  return `https://wa.me/${NUMERO_WHATSAPP}`;
}
