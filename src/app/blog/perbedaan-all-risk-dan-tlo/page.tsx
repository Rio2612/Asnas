import type { Metadata } from "next";
import BlogLayout from "@/components/layout/BlogLayout";

export const metadata: Metadata = {
  title: "Perbedaan Asuransi All Risk dan TLO: Panduan Memilih | Dunia Asuransi",
  description:
    "Penjelasan lengkap perbedaan asuransi kendaraan All Risk vs TLO — cakupan perlindungan, besaran premi, kelebihan kekurangan, dan rekomendasi untuk setiap jenis kendaraan.",
  alternates: { canonical: "https://duniaasuransi.com/blog/perbedaan-all-risk-dan-tlo" },
  openGraph: {
    title: "Perbedaan All Risk dan TLO: Mana yang Lebih Tepat untuk Mobil Anda?",
    description: "Panduan memilih antara asuransi All Risk dan TLO berdasarkan kebutuhan dan budget Anda.",
    url: "https://duniaasuransi.com/blog/perbedaan-all-risk-dan-tlo",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Perbedaan Asuransi All Risk dan TLO",
  datePublished: "2025-03-10",
  author: { "@type": "Person", name: "Rio Mardiansyah" },
  publisher: { "@type": "Organization", name: "Dunia Asuransi", url: "https://duniaasuransi.com" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogLayout
        title="Perbedaan All Risk dan TLO: Mana yang Lebih Tepat?"
        category="Asuransi Kendaraan"
        date="2025-03-10"
        readTime="6 menit"
        description="Penjelasan lengkap perbedaan asuransi kendaraan All Risk vs TLO — cakupan, premi, dan rekomendasi untuk berbagai jenis kendaraan."
        relatedProducts={[
          { title: "Asuransi Mobil", href: "/asuransi-mobil" },
          { title: "Asuransi Kendaraan", href: "/asuransi-kendaraan" },
          { title: "Kalkulator Premi Mobil", href: "/kalkulator-premi-mobil" },
        ]}
        relatedPosts={[
          { title: "Cara Klaim Asuransi Mobil", href: "/blog/cara-klaim-asuransi-mobil" },
        ]}
      >
        <h2>Apa Itu Asuransi All Risk?</h2>
        <p>
          Asuransi All Risk (atau Comprehensive) adalah jenis polis kendaraan yang menanggung <strong>semua jenis kerusakan fisik</strong> — baik parsial maupun total — kecuali yang secara tegas dikecualikan dalam polis. Ini berarti lecet kecil akibat serempetan pun bisa diklaim.
        </p>
        <p>
          Dengan All Risk, Anda mendapatkan perlindungan paling lengkap: kecelakaan, tabrakan, kerusakan saat parkir, pencurian, banjir (dengan endorsement), hingga kerusuhan. Cocok untuk kendaraan baru atau bernilai tinggi.
        </p>

        <h2>Apa Itu Asuransi TLO?</h2>
        <p>
          TLO (Total Loss Only) hanya menanggung kerugian apabila kendaraan <strong>rusak lebih dari 75% dari nilai kendaraan</strong> atau hilang akibat pencurian. Kerusakan kecil dan parsial tidak ditanggung sama sekali.
        </p>
        <p>
          Keuntungan utama TLO adalah premi yang jauh lebih murah — biasanya 60–70% lebih rendah dari All Risk. Cocok untuk kendaraan tua, kendaraan operasional armada besar, atau pemilik yang ingin perlindungan minimum dengan biaya hemat.
        </p>

        <h2>Perbandingan Lengkap All Risk vs TLO</h2>
        <ul>
          <li><strong>Kerusakan parsial:</strong> All Risk ✓ | TLO ✗</li>
          <li><strong>Kerusakan total (&gt;75%):</strong> All Risk ✓ | TLO ✓</li>
          <li><strong>Pencurian:</strong> All Risk ✓ | TLO ✓</li>
          <li><strong>Banjir (dengan endorsement):</strong> All Risk ✓ | TLO ✗</li>
          <li><strong>Tanggung jawab pihak ketiga:</strong> All Risk (opsional) | TLO (opsional)</li>
          <li><strong>Premi tahunan:</strong> All Risk lebih tinggi | TLO lebih rendah</li>
        </ul>

        <h2>Berapa Perbedaan Harga Premi?</h2>
        <p>
          Berdasarkan tarif OJK terbaru, premi All Risk berkisar antara <strong>1,2%–4,2%</strong> dari harga kendaraan per tahun, tergantung wilayah dan kategori harga kendaraan. Sementara TLO jauh lebih rendah, hanya sekitar <strong>0,4%–0,8%</strong> per tahun.
        </p>
        <p>
          Sebagai ilustrasi: untuk mobil seharga Rp 300 juta di Wilayah 2 (Jabodetabek):
        </p>
        <ul>
          <li>All Risk: sekitar Rp 8,1 juta – Rp 8,9 juta per tahun</li>
          <li>TLO: sekitar Rp 2,1 juta – Rp 2,3 juta per tahun</li>
        </ul>
        <p>
          Gunakan <a href="/kalkulator-premi-mobil" className="text-[#c9a84c] font-semibold hover:underline">kalkulator premi kami</a> untuk menghitung estimasi premi sesuai kendaraan Anda.
        </p>

        <h2>Kapan Memilih All Risk?</h2>
        <ul>
          <li>Kendaraan baru (usia 0–5 tahun)</li>
          <li>Nilai kendaraan di atas Rp 200 juta</li>
          <li>Kendaraan digunakan di kota padat lalu lintas</li>
          <li>Kendaraan kredit/leasing (biasanya diwajibkan oleh leasing)</li>
          <li>Anda ingin ketenangan pikiran penuh tanpa khawatir biaya perbaikan kecil</li>
        </ul>

        <h2>Kapan Memilih TLO?</h2>
        <ul>
          <li>Kendaraan sudah berusia di atas 5–7 tahun</li>
          <li>Nilai kendaraan sudah relatif rendah</li>
          <li>Armada kendaraan operasional dalam jumlah banyak</li>
          <li>Budget premi terbatas namun tetap ingin proteksi dari kehilangan total</li>
          <li>Kendaraan yang jarang digunakan di area berisiko tinggi</li>
        </ul>

        <h2>Bisakah Pindah dari TLO ke All Risk atau Sebaliknya?</h2>
        <p>
          Bisa, namun umumnya pergantian jenis polis dilakukan saat perpanjangan tahunan. Untuk pindah dari TLO ke All Risk di tengah periode, kendaraan perlu disurvei ulang dan mungkin ada penyesuaian premi.
        </p>

        <h2>Kesimpulan</h2>
        <p>
          Tidak ada jawaban mutlak mana yang lebih baik — pilihan antara All Risk dan TLO bergantung pada usia kendaraan, nilai kendaraan, intensitas penggunaan, dan kemampuan finansial Anda. Yang terpenting, pastikan Anda memiliki perlindungan yang sesuai kebutuhan.
        </p>
        <p>
          Konsultasikan kebutuhan Anda dengan konsultan kami untuk mendapatkan rekomendasi yang tepat dan penawaran premi terbaik dari berbagai perusahaan asuransi terpercaya.
        </p>
      </BlogLayout>
    </>
  );
}
