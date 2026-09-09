export default function ChatBubble({ role, text }) {
  return (
    <div
      className={`max-w-[80%] rounded-xl px-3 py-2 text-sm ${
        role === "user" ? "ml-auto bg-gold/20 text-pureWhite" : "bg-white/5 text-silver"
      }`}
    >
      {text}
    </div>
  );
}
