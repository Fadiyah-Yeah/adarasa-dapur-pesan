import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Bu Siti Aminah",
    location: "Magelang Kota",
    text: "Rasanya kaya masakan ibu! Nasi box untuk acara kantor kami selalu jadi favorit. Lauk ayamnya juicy dan bumbunya meresap sempurna.",
    rating: 5,
  },
  {
    name: "Pak Budi Santoso",
    location: "Yogyakarta",
    text: "Kue keringnya enak banget! Saya pesan untuk lebaran kemarin dan tamu-tamu pada suka. Nastarnya premium, kejunya berasa!",
    rating: 5,
  },
  {
    name: "Ibu Ratna Dewi",
    location: "Kabupaten Magelang",
    text: "Sudah beberapa kali pesan untuk arisan dan pengajian. Selalu puas! Packing rapi, rasa konsisten, dan pelayanan ramah.",
    rating: 5,
  },
  {
    name: "Mas Rizki",
    location: "Magelang",
    text: "Cocok banget buat acara ulang tahun anak. Nasi boxnya disukai sama anak-anak dan orang tua. Porsi pas, harga terjangkau!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimoni" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apa Kata <span className="text-primary">Pelanggan</span> Kami?
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Kepuasan pelanggan adalah prioritas kami
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="shadow-xl animate-slide-up">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-accent fill-accent"
                    size={24}
                  />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-center text-foreground mb-6 italic leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="text-center">
                <p className="font-semibold text-foreground text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground">
                  📍 {testimonials[currentIndex].location}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full"
            >
              <ChevronLeft size={20} />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-accent w-8"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Sudah ratusan pelanggan puas dengan layanan kami
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Pesanan</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Kepuasan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
