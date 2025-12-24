import { MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { WHATSAPP_MESSAGES, createWhatsAppUrl } from "@/lib/constants";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open(createWhatsAppUrl(WHATSAPP_MESSAGES.general), "_blank");
  };

  const scrollToForm = () => {
    const element = document.getElementById("pesan");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Cita Rasa Rumahan,<br />
            <span className="text-primary">Siap Dipesan</span> untuk Acara
            Spesial Anda
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Katering Ada Rasa – Katering PO area Magelang & Jogja
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nasi Box dan Kue Kering dengan pilihan menu sesuai selera. Dimasak
            dengan cinta dari dapur kami untuk kebahagiaan acara Anda 🍱
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-nature hover:bg-nature/90 text-nature-foreground gap-2 text-lg px-8"
            >
              <MessageCircle size={20} />
              Pesan via WhatsApp
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToForm}
              className="gap-2 text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <FileText size={20} />
              Isi Form Pemesanan
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-2">🍰</div>
              <h3 className="font-semibold text-foreground mb-1">Kue Kering</h3>
              <p className="text-sm text-muted-foreground">
                Aneka kue premium untuk acara Anda
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-2">🍱</div>
              <h3 className="font-semibold text-foreground mb-1">Nasi Box</h3>
              <p className="text-sm text-muted-foreground">
                Pilih isi sesuai selera pelanggan
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-2">📦</div>
              <h3 className="font-semibold text-foreground mb-1">Pre-Order</h3>
              <p className="text-sm text-muted-foreground">
                Pesan jauh hari untuk kepastian
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
