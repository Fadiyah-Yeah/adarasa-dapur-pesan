// Business contact information - centralized for easy maintenance
export const BUSINESS_PHONE = "6285602113573";
export const WHATSAPP_LINK = `https://wa.me/${BUSINESS_PHONE}`;

// Default WhatsApp messages
export const WHATSAPP_MESSAGES = {
  general: "Halo Katering Ada Rasa! Saya ingin tanya-tanya tentang katering.",
  kueKering: "Halo Katering Ada Rasa! Saya tertarik dengan Kue Kering. Mohon info lebih lanjut.",
  nasiBox: "Halo Katering Ada Rasa! Saya tertarik dengan Nasi Box. Mohon info lebih lanjut.",
  customMenu: "Halo Katering Ada Rasa! Saya ingin konsultasi untuk paket catering khusus.",
} as const;

// Helper function to create WhatsApp URL with message
export const createWhatsAppUrl = (message: string): string => {
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
};
