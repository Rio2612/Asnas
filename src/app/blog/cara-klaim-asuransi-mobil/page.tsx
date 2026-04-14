import type { Metadata } from "next";
import BlogLayout from "@/components/layout/BlogLayout";

export const metadata: Metadata = {
  title: "Cara Klaim Asuransi Mobil yang Benar & Cepat | Dunia Asuransi",
  description:
    "Panduan lengkap cara klaim asuransi mobil All Risk dan TLO — dokumen yang dibutuhkan, langkah-langkah klaim, tips agar klaim tidak ditolak perusahaan asuransi.",
  alternates: { canonical: "https://duniaasuransi.com/blog/cara-klaim-asuransi-mobil" },
  openGraph: {
    title: "Cara Klaim Asuransi Mobil yang Benar & Cepat",
    description: "Panduan langkah demi langkah cara mengajukan klaim asuransi mobil All Risk dan TLO.",
    url: "https://duniaasuransi.com/blog/cara-klaim-asuransi-mobil",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Klaim Asuransi Mobil yang Benar & Cepat",
  datePublished: "2025-03-15",
  author: { "@type": "Person", name: "Rio Mardiansyah" },
  publisher: { "@type": "Organization", name: "Dunia Asuransi", url: "https://duniaasuransi.com" },
  description: "Panduan cara klaim asuransi mobil All Risk dan TLO yang benar dan cepat.",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogLayout
        title="Cara Klaim Asuransi Mobil yang Benar & Cepat"
        category="Asuransi Kendaraan"
        date="2025-03-15"
        readTime="7 menit"
        description="Panduan langkah demi langkah cara mengajukan klaim asuransi mobil All Risk dan TLO — dokumen yang dibutuhkan, tips agar klaim tidak ditolak."
        relatedProducts={[
          { title: "Asuransi Mobil", href: "/asuransi-mobil" },
          { title: "Kalkulator Premi Mobil", href: "/kalkulator-premi-mobil" },
          { title: "Asuransi Mobil Listrik", href: "/asuransi-mobil-listrik" },
        ]}
        relatedPosts={[
          { title: "Perbedaan All Risk dan TLO", href: "/blog/perbedaan-all-risk-dan-tlo" },
        ]}
      >
        <h2>Mengapa Memahami Proses Klaim Itu Penting?</h2>
        <p>
          Memiliki polis asuransi mobil saja tidak cukup — Anda juga perlu memahami cara mengajukan klaim dengan benar agar proses berjalan lancar dan klaim tidak ditolak. Banyak pemegang polis gagal klaim bukan karena kasusnya tidak layak, melainkan karena kesalahan prosedur atau dokumen yang tidak lengkap.
        </p>

        <h2>Langkah 1: Laporkan Sesegera Mungkin (Maksimal 3x24 Jam)</h2>
        <p>
          Segera setelah kejadian — entah kecelakaan, pencurian, atau kerusakan lainnya — hubungi perusahaan asuransi atau agen Anda. Sebagian besar polis mensyaratkan pelaporan dalam 3x24 jam. Keterlambatan bisa menjadi alasan penolakan klaim.
        </p>
        <p>
          Untuk kasus pencurian, Anda juga wajib membuat laporan polisi dalam 24 jam. Surat kehilangan dari kepolisian adalah dokumen wajib untuk klaim pencurian.
        </p>

        <h2>Langkah 2: Dokumentasikan Bukti Kerusakan</h2>
        <p>
          Sebelum memindahkan kendaraan (kecuali untuk keselamatan), ambil foto dan video lengkap dari semua sudut kendaraan. Dokumentasikan juga kondisi lokasi kejadian, posisi kendaraan, dan kerusakan pihak ketiga jika ada.
        </p>
        <ul>
          <li>Foto dari depan, belakang, kiri, kanan kendaraan</li>
          <li>Foto detail semua bagian yang rusak</li>
          <li>Foto plat nomor kendaraan yang rusak</li>
          <li>Foto kondisi jalan atau lokasi kejadian</li>
          <li>Foto kendaraan pihak ketiga jika terjadi tabrakan</li>
        </ul>

        <h2>Langkah 3: Siapkan Dokumen yang Diperlukan</h2>
        <p>Dokumen standar yang umumnya dibutuhkan untuk klaim asuransi mobil:</p>
        <ul>
          <li>Polis asuransi asli (atau nomor polis)</li>
          <li>SIM pengemudi yang berlaku saat kejadian</li>
          <li>STNK kendaraan yang berlaku</li>
          <li>KTP pemegang polis</li>
          <li>Berita acara kecelakaan dari kepolisian (untuk kecelakaan besar)</li>
          <li>Surat keterangan kehilangan dari kepolisian (untuk klaim pencurian)</li>
          <li>Foto-foto dokumentasi kerusakan</li>
        </ul>

        <h2>Langkah 4: Survei oleh Adjuster</h2>
        <p>
          Perusahaan asuransi akan mengirimkan loss adjuster atau surveyor untuk menilai kerusakan secara langsung. Pastikan kendaraan belum diperbaiki sebelum disurvei (kecuali perbaikan darurat untuk keselamatan). Hasil survei ini menjadi dasar perhitungan nilai klaim.
        </p>

        <h2>Langkah 5: Persetujuan dan Proses Perbaikan</h2>
        <p>
          Setelah survei disetujui, kendaraan dapat dibawa ke bengkel rekanan atau bengkel pilihan Anda (sesuai ketentuan polis). Untuk perbaikan di bengkel rekanan, biasanya Anda hanya membayar deductible (OR/Own Risk), sedangkan sisanya langsung dibayar oleh asuransi ke bengkel.
        </p>

        <h2>Tips Agar Klaim Tidak Ditolak</h2>
        <ul>
          <li><strong>Laporkan tepat waktu</strong> — jangan tunda lebih dari 3x24 jam</li>
          <li><strong>Jangan perbaiki dulu</strong> — tunggu survei asuransi selesai</li>
          <li><strong>Pastikan SIM berlaku</strong> — klaim bisa ditolak jika SIM pengemudi mati</li>
          <li><strong>Jujur dalam laporan</strong> — pernyataan tidak benar bisa membatalkan polis</li>
          <li><strong>Bayar premi tepat waktu</strong> — polis yang lapse tidak dapat diklaim</li>
          <li><strong>Periksa pengecualian polis</strong> — misalnya kerusakan akibat banjir mungkin butuh endorsement khusus</li>
        </ul>

        <h2>Berapa Lama Proses Klaim?</h2>
        <p>
          Untuk kerusakan parsial (partial loss) di bengkel rekanan, umumnya 5–14 hari kerja tergantung ketersediaan suku cadang. Untuk klaim total loss atau pencurian, prosesnya lebih panjang — bisa 30–60 hari tergantung investigasi.
        </p>
        <p>
          Menggunakan agen atau broker asuransi berpengalaman seperti konsultan kami dapat mempercepat proses klaim secara signifikan karena kami mengetahui prosedur dan kontak yang tepat di setiap perusahaan asuransi.
        </p>

        <h2>Kesimpulan</h2>
        <p>
          Klaim asuransi mobil tidak harus rumit jika Anda tahu prosedurnya. Kunci utamanya: laporkan cepat, dokumentasikan lengkap, dan siapkan dokumen yang diperlukan. Jika Anda membutuhkan bantuan dalam proses klaim, konsultan kami siap membantu tanpa biaya tambahan.
        </p>
      </BlogLayout>
    </>
  );
}
