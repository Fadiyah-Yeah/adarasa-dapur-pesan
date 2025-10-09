import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import kueKeringImage from "@/assets/kue-kering.jpg";
import nasiBoxImage from "@/assets/nasi-box.jpg";

const Menu = () => {
  const handleOrder = (menuType: string) => {
    const message = encodeURIComponent(
      `Halo ADA RASA! Saya tertarik dengan ${menuType}. Mohon info lebih lanjut.`
    );
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
  };

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Menu <span className="text-primary">Pilihan</span> Kami
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih dari berbagai menu lezat kami yang dapat disesuaikan dengan
            selera dan kebutuhan acara Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Kue Kering */}
          <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow animate-slide-up">
            <div className="relative h-64 overflow-hidden">
              <img
                src={kueKeringImage}
                alt="Aneka Kue Kering ADA RASA"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm">
                Best Seller 🔥
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">🍰 Aneka Kue Kering</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Kue kering premium dengan berbagai pilihan rasa yang cocok untuk
                hampers, arisan, atau suguhan spesial.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span>Nastar premium dengan selai nanas asli</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span>Kastengel renyah dengan keju berkualitas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span>Putri Salju lembut dan meleleh di mulut</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span>Dan masih banyak varian lainnya</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground">
                  📦 Minimal order: 1 toples
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Harga mulai dari <span className="font-semibold text-accent">Rp 80.000</span>/toples
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleOrder("Kue Kering")}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Pesan Kue Kering
              </Button>
            </CardFooter>
          </Card>

          {/* Nasi Box */}
          <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow animate-slide-up">
            <div className="relative h-64 overflow-hidden">
              <img
                src={nasiBoxImage}
                alt="Nasi Box ADA RASA"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-nature text-nature-foreground px-4 py-2 rounded-full font-semibold text-sm">
                Customizable 🎯
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">🍱 Nasi Box Custom</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Paket nasi lengkap dengan pilihan lauk, sayur, dan sambal sesuai
                selera. Ideal untuk rapat, hajatan, dan acara kantor.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span>Pilihan lauk: Ayam, Ikan, Daging, Tempe/Tahu</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span>Sayuran segar dan bergizi</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span>Sambal khas rumahan (pedas/tidak pedas)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span>Pelengkap: kerupuk, acar, buah</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground">
                  📦 Minimal order: 20 box
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Harga mulai dari <span className="font-semibold text-accent">Rp 25.000</span>/box
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleOrder("Nasi Box")}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Pesan Nasi Box
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Butuh menu khusus atau paket untuk acara besar?
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const message = encodeURIComponent(
                "Halo ADA RASA! Saya ingin konsultasi untuk paket catering khusus."
              );
              window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
            }}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Konsultasi Menu Khusus
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
