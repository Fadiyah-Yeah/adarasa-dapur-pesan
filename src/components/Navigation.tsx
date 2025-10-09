import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">ADA RASA</div>
            <div className="hidden md:block text-xs text-muted-foreground">
              Dari Dapur Kami, Untuk Selera Anda
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("tentang")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("testimoni")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Testimoni
            </button>
            <button
              onClick={() => scrollToSection("galeri")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Galeri
            </button>
            <button
              onClick={() => scrollToSection("pesan")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Pesan
            </button>
            <Button
              onClick={() => scrollToSection("kontak")}
              variant="default"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Kontak
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-card rounded-lg p-4 shadow-lg">
            <button
              onClick={() => scrollToSection("tentang")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("testimoni")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Testimoni
            </button>
            <button
              onClick={() => scrollToSection("galeri")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Galeri
            </button>
            <button
              onClick={() => scrollToSection("pesan")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Pesan
            </button>
            <Button
              onClick={() => scrollToSection("kontak")}
              variant="default"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Kontak
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
