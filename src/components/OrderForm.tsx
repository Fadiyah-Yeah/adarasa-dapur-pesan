import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { z } from "zod";

// Validation schema for order form
const orderSchema = z.object({
  name: z.string()
    .min(2, "Nama minimal 2 karakter")
    .max(100, "Nama maksimal 100 karakter")
    .regex(/^[a-zA-Z\s.'-]+$/, "Nama hanya boleh berisi huruf dan spasi"),
  phone: z.string()
    .regex(/^(\+62|62|0)[0-9]{9,13}$/, "Format nomor HP tidak valid (contoh: 08123456789)"),
  address: z.string().max(200, "Alamat maksimal 200 karakter").optional().or(z.literal("")),
  menu: z.string()
    .min(5, "Detail menu minimal 5 karakter")
    .max(500, "Detail menu maksimal 500 karakter"),
  eventDate: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Format tanggal tidak valid"),
  vegetable: z.string().max(200, "Pilihan sayur maksimal 200 karakter").optional().or(z.literal("")),
  notes: z.string().max(500, "Catatan maksimal 500 karakter").optional().or(z.literal("")),
});

type OrderFormData = z.infer<typeof orderSchema>;

// Sanitize input to prevent WhatsApp message format injection
const sanitizeInput = (input: string): string => {
  return input
    .replace(/[*_~`]/g, '') // Remove WhatsApp formatting characters
    .trim();
};

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    menu: "",
    eventDate: "",
    vegetable: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof OrderFormData, string>>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate using Zod schema
    const result = orderSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof OrderFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof OrderFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast.error("Mohon periksa kembali data yang diisi");
      return;
    }

    // Use validated and sanitized data
    const validatedData = result.data;
    const sanitizedData = {
      name: sanitizeInput(validatedData.name),
      phone: validatedData.phone,
      address: sanitizeInput(validatedData.address || ""),
      menu: sanitizeInput(validatedData.menu),
      eventDate: validatedData.eventDate,
      vegetable: sanitizeInput(validatedData.vegetable || ""),
      notes: sanitizeInput(validatedData.notes || ""),
    };

    const message = `*PESANAN BARU - KATERING ADA RASA*

*Data Pemesan:*
Nama: ${sanitizedData.name}
No. HP: ${sanitizedData.phone}
Alamat: ${sanitizedData.address || "-"}

*Detail Pesanan:*
Menu: ${sanitizedData.menu}
Tanggal Acara: ${sanitizedData.eventDate}

*Pilihan Sayur:*
${sanitizedData.vegetable || "-"}

*Catatan Tambahan:*
${sanitizedData.notes || "-"}

---
Mohon konfirmasi ketersediaan dan total harga. Terima kasih! `;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6285602113573?text=${encodedMessage}`, "_blank");

    toast.success("Pesanan akan dikirim via WhatsApp!");
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      address: "",
      menu: "",
      eventDate: "",
      vegetable: "",
      notes: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name as keyof OrderFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
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
                  maxLength={100}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name}</p>
                )}
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
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && (
                  <p className="text-xs text-destructive">{errors.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Alamat Pengiriman</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Alamat lengkap (Kota/Kabupaten)"
                  value={formData.address}
                  onChange={handleChange}
                  maxLength={200}
                  className={errors.address ? "border-destructive" : ""}
                />
                {errors.address && (
                  <p className="text-xs text-destructive">{errors.address}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="menu">
                  Pilihan Menu <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="menu"
                  name="menu"
                  placeholder="Contoh: Nasi Box Ayam Goreng 50 box, Kue Nastar 5 toples"
                  value={formData.menu}
                  onChange={handleChange}
                  maxLength={500}
                  className={errors.menu ? "border-destructive" : ""}
                />
                {errors.menu && (
                  <p className="text-xs text-destructive">{errors.menu}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  Tuliskan menu dan jumlah yang diinginkan
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="vegetable">
                  Pilihan Sayur (untuk Nasi Box)
                </Label>
                <Input
                  id="vegetable"
                  name="vegetable"
                  placeholder="Contoh: Sayur asem, tumis kangkung, capcay"
                  value={formData.vegetable}
                  onChange={handleChange}
                  maxLength={200}
                  className={errors.vegetable ? "border-destructive" : ""}
                />
                {errors.vegetable && (
                  <p className="text-xs text-destructive">{errors.vegetable}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  Kosongkan jika tidak memesan Nasi Box
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
                  className={errors.eventDate ? "border-destructive" : ""}
                />
                {errors.eventDate && (
                  <p className="text-xs text-destructive">{errors.eventDate}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  Pastikan Pesan 3 hari sebelum acara
                </p>
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
                  maxLength={500}
                  className={errors.notes ? "border-destructive" : ""}
                />
                {errors.notes && (
                  <p className="text-xs text-destructive">{errors.notes}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-nature hover:bg-nature/90 text-nature-foreground text-lg py-6"
              >
                📤Kirim Pesanan ke WhatsApp
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
