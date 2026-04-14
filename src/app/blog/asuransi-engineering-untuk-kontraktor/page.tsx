import type { Metadata } from "next";
import BlogLayout from "@/components/layout/BlogLayout";

export const metadata: Metadata = {
  title: "Asuransi Engineering untuk Kontraktor: CAR, EAR & MB | Dunia Asuransi",
  description:
    "Panduan memahami asuransi engineering untuk kontraktor Indonesia — Contractor All Risk (CAR), Erection All Risk (EAR), dan Machinery Breakdown (MB). Kapan masing-masing diperlukan?",
  alternates: { canonical: "https://duniaasuransi.com/blog/asuransi-engineering-untuk-kontraktor" },
  openGraph: {
    title: "Asuransi Engineering untuk Kontraktor: CAR, EAR, dan MB",
    description: "Panduan lengkap jenis asuransi engineering yang dibutuhkan kontraktor konstruksi dan industri di Indonesia.",
    url: "https://duniaasuransi.com/blog/asuransi-engineering-untuk-kontraktor",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Engineering untuk Kontraktor: CAR, EAR, dan MB",
  datePublished: "2025-02-10",
  author: { "@type": "Person", name: "Rio Mardiansyah" },
  publisher: { "@type": "Organization", name: "Dunia Asuransi", url: "https://duniaasuransi.com" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogLayout
        title="Asuransi Engineering untuk Kontraktor: CAR, EAR, dan MB"
        category="Asuransi Engineering"
        date="2025-02-10"
        readTime="9 menit"
        description="Panduan memahami jenis-jenis asuransi engineering — Contractor All Risk, Erection All Risk, dan Machinery Breakdown untuk kebutuhan proyek Anda."
        relatedProducts={[
          { title: "Contractor All Risk", href: "/contractor-all-risk" },
          { title: "Erection All Risk", href: "/erection-all-risk" },
          { title: "Machinery Breakdown", href: "/machinery-breakdown" },
          { title: "Asuransi Engineering", href: "/asuransi-engineering" },
        ]}
        relatedPosts={[
          { title: "Panduan Asuransi Alat Berat", href: "/blog/panduan-asuransi-alat-berat" },
        ]}
      >
        <h2>Mengapa Kontraktor Membutuhkan Asuransi Engineering?</h2>
        <p>
          Proyek konstruksi dan engineering adalah salah satu aktivitas bisnis dengan risiko tertinggi. Kebakaran di lokasi proyek, kecelakaan konstruksi, kerusakan mesin saat erection, hingga bencana alam — semua bisa terjadi dan berpotensi menyebabkan kerugian ratusan juta hingga miliaran rupiah.
        </p>
        <p>
          Asuransi engineering dirancang khusus untuk melindungi kontraktor, owner proyek, dan subkontraktor dari berbagai risiko yang timbul selama masa konstruksi, pemasangan mesin, dan operasional.
        </p>

        <h2>1. Contractor All Risk (CAR)</h2>
        <p>
          CAR adalah asuransi paling umum untuk proyek konstruksi sipil — gedung bertingkat, jembatan, jalan, bendungan, dan infrastruktur lainnya. Polis CAR terdiri dari dua bagian utama:
        </p>
        <ul>
          <li><strong>Section I — Material Damage:</strong> Menanggung kerusakan atau kehilangan pekerjaan konstruksi, material, dan peralatan yang digunakan di lokasi proyek.</li>
          <li><strong>Section II — Third Party Liability:</strong> Menanggung tanggung jawab hukum terhadap cedera orang atau kerusakan properti pihak ketiga yang terjadi selama proyek berlangsung.</li>
        </ul>
        <p>
          CAR biasanya berlaku dari tanggal mulai konstruksi hingga selesai, plus periode maintenance (biasanya 12 bulan setelah serah terima).
        </p>

        <h2>2. Erection All Risk (EAR)</h2>
        <p>
          EAR adalah padanan CAR untuk proyek pemasangan mesin, struktur baja, dan fasilitas industri. Jika CAR untuk beton dan sipil, EAR untuk besi, mesin, dan mekanikal-elektrikal.
        </p>
        <p>Cocok untuk proyek:</p>
        <ul>
          <li>Erection tower (menara telekomunikasi, menara listrik)</li>
          <li>Pemasangan mesin pabrik dan power plant</li>
          <li>Konstruksi steel structure</li>
          <li>Instalasi oil & gas facility</li>
          <li>Pemasangan lift, escalator, dan sistem MEP gedung</li>
        </ul>
        <p>
          EAR juga mencakup periode testing & commissioning — saat mesin pertama kali diuji, risiko kerusakan sangat tinggi dan perlu perlindungan ekstra.
        </p>

        <h2>3. Machinery Breakdown (MB)</h2>
        <p>
          Berbeda dari CAR dan EAR yang fokus pada masa konstruksi, MB adalah asuransi untuk mesin yang <strong>sudah beroperasi</strong>. MB menanggung kerusakan mendadak dan tidak terduga pada mesin industri — bukan keausan normal atau pemeliharaan rutin.
        </p>
        <p>Jenis mesin yang bisa dilindungi MB:</p>
        <ul>
          <li>Mesin produksi utama (press, lathe, milling, dll)</li>
          <li>Generator dan transformator</li>
          <li>Kompresor dan pompa industri</li>
          <li>Chiller dan sistem pendingin</li>
          <li>Boiler dan pressure vessel</li>
        </ul>

        <h2>Perbedaan CAR, EAR, dan MB dalam Tabel</h2>
        <ul>
          <li><strong>CAR:</strong> Proyek konstruksi sipil, masa pembangunan</li>
          <li><strong>EAR:</strong> Proyek erection mesin/baja, masa pemasangan</li>
          <li><strong>MB:</strong> Mesin yang sedang beroperasi, masa produksi</li>
        </ul>

        <h2>Siapa yang Membeli Polis Engineering?</h2>
        <p>
          Polis CAR dan EAR biasanya dibeli oleh <strong>owner proyek (principal)</strong> atau <strong>kontraktor utama</strong>, dan mencantumkan semua pihak yang terlibat (kontraktor, subkontraktor, konsultan) sebagai named insured. Ini lebih efisien daripada masing-masing pihak membeli polis terpisah.
        </p>
        <p>
          Polis MB biasanya dibeli oleh <strong>pemilik mesin</strong> — bisa pabrik, pengelola gedung, atau operator fasilitas industri.
        </p>

        <h2>Tips Memilih Polis Asuransi Engineering</h2>
        <ul>
          <li><strong>Tentukan cakupan yang dibutuhkan</strong> — apakah CAR saja, atau perlu EAR dan MB juga?</li>
          <li><strong>Hitung nilai pertanggungan yang tepat</strong> — setidaknya sama dengan nilai kontrak proyek</li>
          <li><strong>Perhatikan maintenance period</strong> — pastikan polis menanggung masa pemeliharaan</li>
          <li><strong>Sertakan semua pihak</strong> — kontraktor dan subkontraktor sebagai named insured</li>
          <li><strong>Pilih limit TPL yang memadai</strong> — terutama untuk proyek di area padat penduduk</li>
          <li><strong>Konsultasikan dengan broker berpengalaman</strong> di bidang engineering insurance</li>
        </ul>

        <h2>Kesimpulan</h2>
        <p>
          CAR, EAR, dan MB adalah tiga pilar utama asuransi engineering yang saling melengkapi. Memilih yang tepat bergantung pada jenis proyek, fase pekerjaan, dan risiko spesifik yang dihadapi.
        </p>
        <p>
          Konsultan kami memiliki pengalaman luas dalam menangani asuransi engineering untuk proyek infrastruktur, industri, dan pembangkit listrik di seluruh Indonesia. Hubungi kami untuk diskusi dan penawaran yang disesuaikan dengan kebutuhan proyek Anda.
        </p>
      </BlogLayout>
    </>
  );
}
