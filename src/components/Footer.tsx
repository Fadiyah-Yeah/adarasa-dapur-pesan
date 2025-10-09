import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">ADA RASA</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Dari Dapur Kami, Untuk Selera Anda
            </p>
            <p className="text-xs text-primary-foreground/70">
              Katering rumahan terpercaya di Magelang & Yogyakarta sejak 2020
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Menu Kami</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>🍰 Aneka Kue Kering</li>
              <li>🍱 Nasi Box Custom</li>
              <li>🎉 Paket Event Khusus</li>
              <li>🍽️ Catering Harian</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/adarasa.catering"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                📸 Instagram
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
            <div className="mt-4 text-xs text-primary-foreground/70">
              <p>Perumahan Marisson Regency E6</p>
              <p>Jogomulyo, Tempuran</p>
              <p>Kabupaten Magelang, Jawa Tengah</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm text-primary-foreground/70 flex items-center justify-center gap-2">
            © 2024 ADA RASA. Dibuat dengan{" "}
            <Heart size={16} className="text-accent fill-accent" /> untuk
            pelanggan kami
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
