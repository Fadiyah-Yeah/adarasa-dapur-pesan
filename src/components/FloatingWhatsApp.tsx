import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_MESSAGES, createWhatsAppUrl } from "@/lib/constants";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open(createWhatsAppUrl(WHATSAPP_MESSAGES.general), "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-2xl bg-nature hover:bg-nature/90 text-nature-foreground animate-bounce hover:animate-none"
      size="icon"
    >
      <MessageCircle size={28} />
    </Button>
  );
};

export default FloatingWhatsApp;
