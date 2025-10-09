import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="kontak" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hubungi <span className="text-primary">Kami</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Kami siap membantu kebutuhan katering Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up">
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Informasi Kontak
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Alamat</p>
                    <p className="text-muted-foreground text-sm">
                      Perumahan Marisson Regency, Blok E6<br />
                      Jogomulyo, Tempuran<br />
                      Kabupaten Magelang, Jawa Tengah
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Telepon/WhatsApp</p>
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 text-sm"
                    >
                      +62 812-3456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:info@adarasa.com"
                      className="text-accent hover:text-accent/80 text-sm"
                    >
                      info@adarasa.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Instagram</p>
                    <a
                      href="https://instagram.com/adarasa.catering"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 text-sm"
                    >
                      @adarasa.catering
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <Button
                  onClick={() => {
                    const message = encodeURIComponent(
                      "Halo ADA RASA! Saya ingin tanya-tanya tentang katering."
                    );
                    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
                  }}
                  className="w-full bg-nature hover:bg-nature/90 text-nature-foreground gap-2"
                >
                  <MessageCircle size={20} />
                  Chat via WhatsApp
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                ⏰ Jam Operasional
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Senin - Jumat</span>
                  <span className="font-medium">08:00 - 17:00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sabtu</span>
                  <span className="font-medium">08:00 - 14:00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Minggu</span>
                  <span className="font-medium">Libur</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                * Chat WhatsApp bisa kapan saja, akan kami balas secepatnya
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="animate-slide-up">
            <div className="bg-card rounded-xl p-4 shadow-lg h-full">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                📍 Lokasi Kami
              </h3>
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.123456789!2d110.217!3d-7.523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzEnMjIuOCJTIDExMMKwMTMnMDEuMiJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi ADA RASA Catering"
                ></iframe>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Perumahan Marisson Regency, Jogomulyo, Tempuran, Kab. Magelang
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
