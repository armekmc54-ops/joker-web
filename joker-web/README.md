# Cervecería Joker — Sitio Web

Speakeasy / lounge de lujo. React + Tailwind CSS + Framer Motion.

## Instalación

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Antes de publicar

1. **WhatsApp**: reemplaza `521XXXXXXXXXX` en `src/utils/whatsapp.js` con tu número real (lada país incluida, sin `+` ni espacios).
2. **Mapa**: reemplaza el `src` del iframe en `src/components/layout/Footer.jsx` con el embed real de tu ubicación en Google Maps (Compartir → Insertar un mapa).
3. **Video/imágenes del Hero**: coloca tu video en `public/assets/video/hero-loop.mp4` y un poster en `public/assets/img/hero-poster.jpg`.
4. **Fotos del menú**: coloca las imágenes referenciadas en `src/data/menu.json` dentro de `public/assets/img/`.
5. **Checkout real**: en `src/components/menu/CheckoutModal.jsx`, sustituye la simulación (`setTimeout`) por tu integración real de pago (Stripe, Conekta, MercadoPago).
6. **Concierge con IA real**: en `src/components/concierge/conciergeLogic.js`, el fallback llama a `/api/concierge`. Debes crear ese endpoint en tu backend (Node/Express, Next.js API route, etc.) que reciba `{ historial, systemPrompt }` y llame a la API de Claude o de OpenAI con tu API key protegida del lado del servidor — nunca la coloques en el frontend.

## Editar la cartelera de eventos semanal

Solo edita `src/data/events.json`. No hace falta tocar ningún componente:

```json
{
  "dia": "Viernes",
  "titulo": "Nombre del evento",
  "hora": "22:00 - 03:00",
  "destacado": true
}
```

## Editar el menú

Igual, en `src/data/menu.json` — agrega, quita o cambia precios de productos sin tocar componentes.

## Estructura

```
src/
├── data/            # menu.json, events.json, faq.json — contenido editable
├── context/         # CartContext (estado global del carrito)
├── utils/           # generador de links de WhatsApp, formato de moneda
└── components/
    ├── layout/      # Navbar, Footer
    ├── common/      # AgeGateModal, WhatsAppFloatButton, GoldButton
    ├── hero/        # HeroSection
    ├── menu/        # MenuSection, ProductCard, CartDrawer, CheckoutModal
    ├── events/      # EventsBoard, EventCard
    ├── booking/     # ReservationForm
    └── concierge/   # ConciergeWidget, ChatBubble, conciergeLogic.js
```
