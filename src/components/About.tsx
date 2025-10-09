import { Heart, MapPin, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="tentang" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tentang <span className="text-primary">ADA RASA</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground italic">
              "Dari Dapur Kami, Untuk Selera Anda"
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 mb-8 animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <Heart className="text-accent flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Filosofi Kami
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  ADA RASA lahir dari kecintaan kami terhadap masakan rumahan
                  yang penuh kehangatan. Setiap hidangan dibuat dengan penuh
                  perhatian, menggunakan bahan-bahan segar pilihan yang dimasak
                  setiap hari. Kami percaya bahwa makanan yang dibuat dengan
                  cinta akan menghadirkan kebahagiaan di setiap acara Anda.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Lokasi Kami
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Perumahan Marisson Regency, Jogomulyo, Tempuran<br />
                    Kabupaten Magelang, Jawa Tengah<br />
                    <span className="font-medium">Blok E6</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Area Layanan
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Kota & Kabupaten Magelang<br />
                    Daerah Istimewa Yogyakarta<br />
                    <span className="text-accent font-medium">
                      Sistem Pre-Order (PO)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">✨</div>
              <h4 className="font-semibold text-foreground mb-2">
                Bahan Segar
              </h4>
              <p className="text-sm text-muted-foreground">
                Dipilih langsung setiap pagi
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">👨‍🍳</div>
              <h4 className="font-semibold text-foreground mb-2">
                Dimasak Harian
              </h4>
              <p className="text-sm text-muted-foreground">
                Fresh dari dapur kami
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-semibold text-foreground mb-2">
                Terpercaya
              </h4>
              <p className="text-sm text-muted-foreground">
                Dipercaya ratusan pelanggan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
