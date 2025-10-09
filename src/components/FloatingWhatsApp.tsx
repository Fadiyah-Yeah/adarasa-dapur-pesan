import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Halo Katering Ada Rasa! Saya ingin tanya-tanya tentang katering."
    );
    window.open(`https://wa.me/6285602113573?text=${message}`, "_blank");
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
