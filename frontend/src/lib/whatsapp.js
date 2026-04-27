// Centralized WhatsApp configuration.
// Replace WHATSAPP_NUMBER with your real number (country code + DDD + number, digits only).
export const WHATSAPP_NUMBER = "5511921388178";

const DEFAULT_MESSAGE =
    "Olá! Quero agendar um Diagnóstico Estratégico Grocor e descobrir quanto estou perdendo em vendas hoje.";

export function waLink(message = DEFAULT_MESSAGE) {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
