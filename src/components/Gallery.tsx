import kueKeringImage from "@/assets/kue-kering.jpg";
import nasiBoxImage from "@/assets/nasi-box.jpg";
import heroImage from "@/assets/hero-image.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Hidangan ADA RASA" },
    { src: kueKeringImage, alt: "Kue Kering Premium" },
    { src: nasiBoxImage, alt: "Nasi Box Lengkap" },
    { src: heroImage, alt: "Katering Event" },
    { src: kueKeringImage, alt: "Nastar Premium" },
    { src: nasiBoxImage, alt: "Paket Nasi Box" },
  ];

  return (
    <section id="galeri" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Galeri</span> Hidangan Kami
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Setiap hidangan dibuat dengan perhatian dan cinta ❤️
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-primary-foreground font-semibold p-4">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ingin lihat lebih banyak foto dan video proses pembuatan?
          </p>
          <a
            href="https://instagram.com/adarasa.catering"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
          >
            <span>📸</span>
            Kunjungi Instagram Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
