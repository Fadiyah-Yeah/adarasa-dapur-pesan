import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    menu: "",
    eventDate: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.menu || !formData.eventDate) {
      toast.error("Mohon lengkapi data yang wajib diisi");
      return;
    }

    const message = `*PESANAN BARU - ADA RASA*

Nama: ${formData.name}
No. HP: ${formData.phone}
Alamat: ${formData.address || "-"}

Menu: ${formData.menu}
Tanggal Acara: ${formData.eventDate}

Catatan Tambahan:
${formData.notes || "-"}

Mohon konfirmasi ketersediaan dan harga. Terima kasih! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281234567890?text=${encodedMessage}`, "_blank");

    toast.success("Pesanan akan dikirim via WhatsApp!");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="pesan" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Form <span className="text-primary">Pemesanan</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Isi form di bawah ini dan pesanan akan dikirim ke WhatsApp kami
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-xl animate-slide-up">
          <CardHeader>
            <CardTitle className="text-center">📝 Detail Pesanan Anda</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Nama Lengkap <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Nama Anda"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Nomor WhatsApp <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="08xx xxxx xxxx"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Alamat Pengiriman</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Alamat lengkap (Kota/Kabupaten)"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="menu">
                  Pilihan Menu <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="menu"
                  name="menu"
                  placeholder="Contoh: Nasi Box Ayam 50 pax, Kue Kering 5 toples"
                  value={formData.menu}
                  onChange={handleChange}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Tuliskan menu dan jumlah yang diinginkan
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventDate">
                  Tanggal Acara <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Catatan Tambahan</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Contoh: Tidak pakai sambal pedas, tambah kerupuk ekstra, dll"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-nature hover:bg-nature/90 text-nature-foreground text-lg py-6"
              >
                📤 Kirim Pesanan ke WhatsApp
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Setelah klik tombol, Anda akan diarahkan ke WhatsApp untuk
                konfirmasi pesanan
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrderForm;
