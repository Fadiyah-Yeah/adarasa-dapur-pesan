import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import kueKeringImage from "@/assets/kue-kering.jpg";
import nasiBoxImage from "@/assets/nasi-box.jpg";

const Menu = () => {
  const handleOrder = (menuType: string) => {
    const message = encodeURIComponent(
      `Halo Katering Ada Rasa! Saya tertarik dengan ${menuType}. Mohon info lebih lanjut.`
    );
    window.open(`https://wa.me/6285602113573?text=${message}`, "_blank");
  };

  const kueKeringMenu = [
    { name: "Nastar", price: "48.000" },
    { name: "Putri Salju", price: "33.000" },
    { name: "Kastengel", price: "58.000" },
    { name: "Choco Chip", price: "34.000" },
    { name: "Kue Kacang", price: "33.000" },
    { name: "Paket Lengkap", price: "200.000" },
  ];

  const nasiBoxMenu = [
    { name: "Nasi Box Ayam Goreng", price: "18.000" },
    { name: "Nasi Box Ayam Bakar", price: "20.000" },
    { name: "Nasi Box Rendang Ayam", price: "22.000" },
    { name: "Nasi Box Ikan Goreng", price: "19.000" },
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Menu <span className="text-primary">Pilihan</span> Kami
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih dari berbagai menu lezat kami dengan harga terjangkau
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Kue Kering */}
          <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow animate-slide-up">
            <div className="relative h-64 overflow-hidden">
              <img
                src={kueKeringImage}
                alt="Aneka Kue Kering Katering Ada Rasa"
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
              <div className="space-y-2">
                {kueKeringMenu.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-foreground font-medium">{item.name}</span>
                    <span className="text-accent font-semibold">Rp {item.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  📦 Minimal order: 1 toples (kecuali Paket Lengkap)
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
                alt="Nasi Box Katering Ada Rasa"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-nature text-nature-foreground px-4 py-2 rounded-full font-semibold text-sm">
                Customizable 🎯
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">🍱 Nasi Box</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Paket nasi lengkap dengan pilihan lauk dan sayur. Ideal untuk rapat, 
                hajatan, dan acara kantor.
              </p>
              <div className="space-y-2">
                {nasiBoxMenu.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-foreground font-medium">{item.name}</span>
                    <span className="text-accent font-semibold">Rp {item.price}/box</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border space-y-2">
                <p className="text-sm text-foreground font-medium">
                  ✓ Nasi putih hangat
                </p>
                <p className="text-sm text-foreground font-medium">
                  ✓ Pilihan sayur (cantumkan di catatan)
                </p>
                <p className="text-sm text-foreground font-medium">
                  ✓ Sambal & pelengkap
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  📦 Minimal order: 20 box
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
                "Halo Katering Ada Rasa! Saya ingin konsultasi untuk paket catering khusus."
              );
              window.open(`https://wa.me/6285602113573?text=${message}`, "_blank");
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
