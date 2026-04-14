import type { Metadata } from "next";
import BlogLayout from "@/components/layout/BlogLayout";

export const metadata: Metadata = {
  title: "Panduan Lengkap Asuransi Alat Berat untuk Kontraktor | Dunia Asuransi",
  description:
    "Panduan komprehensif asuransi alat berat — excavator, bulldozer, crane, forklift. Jenis polis, cara menentukan nilai pertanggungan, tips klaim, dan rekomendasi coverage.",
  alternates: { canonical: "https://duniaasuransi.com/blog/panduan-asuransi-alat-berat" },
  openGraph: {
    title: "Panduan Lengkap Asuransi Alat Berat untuk Kontraktor",
    description: "Semua yang perlu diketahui kontraktor tentang asuransi excavator, crane, bulldozer, dan alat berat lainnya.",
    url: "https://duniaasuransi.com/blog/panduan-asuransi-alat-berat",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Panduan Lengkap Asuransi Alat Berat untuk Kontraktor",
  datePublished: "2025-02-28",
  author: { "@type": "Person", name: "Rio Mardiansyah" },
  publisher: { "@type": "Organization", name: "Dunia Asuransi", url: "https://duniaasuransi.com" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogLayout
        title="Panduan Lengkap Asuransi Alat Berat untuk Kontraktor"
        category="Alat Berat & Machinery"
        date="2025-02-28"
        readTime="10 menit"
        description="Semua yang perlu Anda ketahui tentang asuransi excavator, bulldozer, crane, dan alat berat lainnya — jenis polis, nilai pertanggungan, dan cara klaim."
        relatedProducts={[
          { title: "Asuransi Alat Berat", href: "/asuransi-alat-berat" },
          { title: "Asuransi Excavator", href: "/asuransi-excavator" },
          { title: "Asuransi Crane", href: "/asuransi-crane" },
          { title: "Asuransi Machinery", href: "/asuransi-machinery" },
        ]}
        relatedPosts={[
          { title: "Asuransi Engineering untuk Kontraktor", href: "/blog/asuransi-engineering-untuk-kontraktor" },
        ]}
      >
        <h2>Mengapa Alat Berat Wajib Diasuransikan?</h2>
        <p>
          Alat berat seperti excavator, bulldozer, crane, dan forklift adalah investasi bernilai miliaran rupiah. Sebuah excavator kelas menengah bisa bernilai Rp 1–3 miliar, sementara tower crane proyek gedung tinggi bisa mencapai Rp 10 miliar atau lebih.
        </p>
        <p>
          Tanpa asuransi yang memadai, kerusakan satu unit alat berat bisa mengganggu cashflow proyek secara serius, bahkan mengakibatkan keterlambatan penyelesaian yang berujung pada denda atau kerugian kontrak.
        </p>

        <h2>Jenis-Jenis Asuransi untuk Alat Berat</h2>
        <p>Ada beberapa jenis polis yang relevan untuk alat berat:</p>
        <ul>
          <li><strong>Contractors' Plant &amp; Machinery (CPM):</strong> Polis khusus alat berat yang menanggung kerusakan fisik dari semua risiko (all risks basis).</li>
          <li><strong>Contractor All Risk (CAR) — Section Plant:</strong> Bagian dari polis CAR proyek yang mencakup alat berat yang digunakan di lokasi proyek.</li>
          <li><strong>Machinery Breakdown (MB):</strong> Khusus untuk kerusakan mekanik internal mesin, terpisah dari kerusakan eksternal.</li>
          <li><strong>Asuransi Kendaraan (untuk alat berat berplat):</strong> Dump truck, crane mobile berplat nomor, dan kendaraan operasional berplat bisa diasuransikan dengan polis kendaraan bermotor.</li>
        </ul>

        <h2>Apa Saja yang Ditanggung?</h2>
        <p>Polis alat berat standar (CPM) umumnya menanggung:</p>
        <ul>
          <li>Kerusakan fisik akibat kecelakaan operasional (terbalik, tabrakan, jatuh)</li>
          <li>Kebakaran dan ledakan</li>
          <li>Pencurian dengan kekerasan</li>
          <li>Kerusakan akibat kesalahan operator (operator error)</li>
          <li>Biaya pembersihan puing dan pemindahan reruntuhan</li>
          <li>Tanggung jawab terhadap pihak ketiga (dengan tambahan TPL)</li>
        </ul>
        <p>Dengan endorsement tambahan, bisa diperluas ke:</p>
        <ul>
          <li>Kerusakan mekanik dan breakdown</li>
          <li>Coverage saat transit (pengangkutan antar lokasi)</li>
          <li>Loss of hire (sewa alat pengganti)</li>
          <li>Personal accident untuk operator</li>
        </ul>

        <h2>Cara Menentukan Nilai Pertanggungan yang Tepat</h2>
        <p>
          Nilai pertanggungan alat berat sebaiknya berdasarkan <strong>Replacement Cost New (RCN)</strong> — yaitu harga untuk membeli unit baru yang setara di pasaran saat ini, bukan harga beli dulu atau nilai buku.
        </p>
        <p>
          Mengasuransikan dengan nilai terlalu rendah (underinsurance) berisiko mendapat ganti rugi yang tidak penuh saat klaim karena berlakunya klausul average (proporsional). Misalnya, jika nilai pertanggungan hanya 50% dari nilai seharusnya, klaim Anda pun hanya akan dibayar 50%.
        </p>

        <h2>Alat Berat Off-Road vs On-Road: Perbedaan Polis</h2>
        <p>
          Ini poin penting yang sering membingungkan. Alat berat yang beroperasi di area tertentu tanpa plat nomor (excavator, bulldozer, wheel loader di tambang/proyek) masuk kategori <strong>Contractors' Plant &amp; Machinery</strong>.
        </p>
        <p>
          Sedangkan kendaraan yang memiliki plat nomor dan beroperasi di jalan umum (dump truck, crane mobile berplat) masuk ke kategori <strong>asuransi kendaraan bermotor</strong> dengan rate dan ketentuan berbeda.
        </p>

        <h2>Tips Memilih Asuransi Alat Berat</h2>
        <ul>
          <li><strong>Tentukan coverage area dengan jelas</strong> — lokasi proyek, tambang, atau multi-lokasi</li>
          <li><strong>Sertakan transit coverage</strong> jika alat sering dipindah antar proyek</li>
          <li><strong>Pilih surveyor yang berpengalaman</strong> dengan alat berat industri</li>
          <li><strong>Perhatikan deductible</strong> — pilih yang sesuai kemampuan finansial</li>
          <li><strong>Pastikan operator bersertifikat</strong> — beberapa klaim ditolak karena operator tidak memiliki SIO</li>
          <li><strong>Update nilai pertanggungan</strong> setiap tahun sesuai kondisi pasar</li>
        </ul>

        <h2>Bagaimana Proses Klaim Alat Berat?</h2>
        <p>
          Langkah-langkah klaim alat berat umumnya sama dengan klaim asuransi lainnya: laporkan segera, dokumentasikan kerusakan dengan foto dan video, jangan perbaiki sebelum disurvei, dan lengkapi dokumen yang diminta.
        </p>
        <p>
          Untuk alat berat di lokasi terpencil (tambang di Kalimantan, Papua, dll), surveyor bisa melakukan survei on-site atau menggunakan laporan teknis dari mekanik Anda sebagai dasar awal penilaian.
        </p>

        <h2>Kesimpulan</h2>
        <p>
          Asuransi alat berat bukan sekadar biaya tambahan — ini adalah investasi untuk melindungi aset dan kelangsungan operasional bisnis Anda. Dengan polis yang tepat, kerusakan satu unit alat berat tidak harus menghentikan seluruh proyek Anda.
        </p>
        <p>
          Konsultasikan kebutuhan asuransi alat berat Anda dengan tim kami. Kami berpengalaman menangani asuransi alat berat untuk perusahaan konstruksi, tambang, dan rental di seluruh Indonesia.
        </p>
      </BlogLayout>
    </>
  );
}
