import type { Metadata } from "next";
import BlogLayout from "@/components/layout/BlogLayout";

export const metadata: Metadata = {
  title: "Cara Memilih Asuransi Properti yang Tepat untuk Bisnis | Dunia Asuransi",
  description:
    "Tips praktis memilih antara Property All Risk, Industrial All Risk, dan asuransi kebakaran biasa untuk properti bisnis Anda. Panduan lengkap dengan perbandingan coverage.",
  alternates: { canonical: "https://duniaasuransi.com/blog/cara-memilih-asuransi-properti" },
  openGraph: {
    title: "Cara Memilih Asuransi Properti yang Tepat untuk Bisnis",
    description: "Panduan memilih antara PAR, IAR, dan asuransi kebakaran sesuai jenis properti dan kebutuhan bisnis Anda.",
    url: "https://duniaasuransi.com/blog/cara-memilih-asuransi-properti",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Memilih Asuransi Properti yang Tepat untuk Bisnis",
  datePublished: "2025-01-25",
  author: { "@type": "Person", name: "Rio Mardiansyah" },
  publisher: { "@type": "Organization", name: "Dunia Asuransi", url: "https://duniaasuransi.com" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogLayout
        title="Cara Memilih Asuransi Properti yang Tepat untuk Bisnis"
        category="Asuransi Properti"
        date="2025-01-25"
        readTime="8 menit"
        description="Tips praktis memilih antara Property All Risk, Industrial All Risk, dan asuransi kebakaran biasa — sesuai jenis dan nilai properti bisnis Anda."
        relatedProducts={[
          { title: "Asuransi Properti", href: "/asuransi-properti" },
          { title: "Property All Risk", href: "/property-all-risk" },
          { title: "Industrial All Risk", href: "/industrial-all-risk" },
          { title: "Asuransi Kebakaran", href: "/asuransi-kebakaran" },
        ]}
        relatedPosts={[
          { title: "Asuransi Engineering untuk Kontraktor", href: "/blog/asuransi-engineering-untuk-kontraktor" },
        ]}
      >
        <h2>Mengapa Memilih Asuransi Properti yang Tepat Itu Penting?</h2>
        <p>
          Properti adalah salah satu aset terbesar bagi kebanyakan bisnis. Kehilangan atau kerusakan bangunan, peralatan, dan stok barang akibat kebakaran, banjir, atau bencana lainnya bisa memukul bisnis secara fatal tanpa asuransi yang memadai.
        </p>
        <p>
          Namun banyak pemilik bisnis yang memilih polis yang terlalu sempit (dan kehilangan banyak manfaat) atau terlalu luas (dan membayar premi berlebihan). Panduan ini membantu Anda menemukan titik yang tepat.
        </p>

        <h2>Tiga Pilihan Utama Asuransi Properti</h2>
        <p>Ada tiga jenis polis properti utama yang perlu Anda pahami:</p>

        <h2>1. Asuransi Kebakaran (Fire Insurance)</h2>
        <p>
          Ini adalah polis properti paling dasar — sering disebut FLEXAS (Fire, Lightning, EXplosion, Aircraft impact, Smoke). Menanggung:
        </p>
        <ul>
          <li>Kebakaran tidak disengaja</li>
          <li>Sambaran petir</li>
          <li>Ledakan (gas, boiler)</li>
          <li>Kecelakaan pesawat jatuh</li>
          <li>Asap tebal yang merusak</li>
        </ul>
        <p>
          Cocok untuk: properti residensial, ruko sederhana, atau bisnis kecil yang hanya membutuhkan perlindungan dasar dengan premi paling terjangkau. Risiko banjir, gempa, dan pencurian perlu ditambahkan sebagai endorsement terpisah.
        </p>

        <h2>2. Property All Risk (PAR)</h2>
        <p>
          PAR memberikan cakupan jauh lebih luas dari asuransi kebakaran. Prinsipnya adalah <strong>"semua risiko dijamin kecuali yang dikecualikan"</strong>, bukan sebaliknya. Risiko yang ditanggung termasuk:
        </p>
        <ul>
          <li>Semua cakupan FLEXAS +</li>
          <li>Banjir dan angin badai</li>
          <li>Kerusuhan, huru-hara, dan sabotase</li>
          <li>Pencurian dengan kekerasan</li>
          <li>Kerusakan akibat kendaraan atau objek jatuh</li>
          <li>Risiko lain yang tidak dikecualikan secara eksplisit</li>
        </ul>
        <p>
          Cocok untuk: gedung komersial, kantor, pusat perbelanjaan, hotel, apartemen, dan properti bisnis menengah hingga besar.
        </p>

        <h2>3. Industrial All Risk (IAR)</h2>
        <p>
          IAR adalah versi PAR yang dirancang khusus untuk lingkungan industri. Selain semua cakupan PAR, IAR juga bisa mencakup:
        </p>
        <ul>
          <li>Kerusakan mesin dan peralatan produksi (dengan endorsement MB)</li>
          <li>Stok bahan baku dan produk jadi</li>
          <li>Business interruption yang terintegrasi</li>
          <li>Risiko spesifik industri (kontaminasi, korosi, dll)</li>
        </ul>
        <p>
          Cocok untuk: pabrik, fasilitas manufaktur, plant industri, kompleks pergudangan, dan fasilitas produksi skala besar.
        </p>

        <h2>Bagaimana Menentukan Mana yang Tepat?</h2>
        <p>Tanyakan pada diri Anda:</p>
        <ul>
          <li><strong>Jenis properti apa yang Anda miliki?</strong> Hunian, kantor, ruko, pabrik, atau gudang?</li>
          <li><strong>Berapa nilai aset yang perlu dilindungi?</strong> Termasuk bangunan, isi, dan mesin.</li>
          <li><strong>Risiko apa yang paling relevan?</strong> Daerah banjir? Rawan gempa? Area padat industri?</li>
          <li><strong>Apakah ada mesin produksi?</strong> Jika ya, IAR atau PAR + MB lebih tepat.</li>
          <li><strong>Apakah bisnis sangat bergantung pada satu lokasi?</strong> Pertimbangkan Business Interruption add-on.</li>
        </ul>

        <h2>Panduan Cepat: Polis Mana untuk Siapa?</h2>
        <ul>
          <li><strong>Rumah tinggal pribadi:</strong> PAR atau Asuransi Kebakaran + endorsement banjir</li>
          <li><strong>Ruko/kios:</strong> Asuransi Kebakaran atau PAR Basic</li>
          <li><strong>Kantor/gedung komersial:</strong> PAR Standard dengan TPL</li>
          <li><strong>Hotel/apartemen:</strong> PAR + Loss of Rent + Public Liability</li>
          <li><strong>Gudang logistik:</strong> PAR + stok barang coverage</li>
          <li><strong>Pabrik manufaktur:</strong> IAR + Machinery Breakdown + BI</li>
        </ul>

        <h2>Jangan Lupakan Business Interruption</h2>
        <p>
          Salah satu mistake terbesar dalam asuransi properti bisnis adalah tidak menyertakan Business Interruption (BI). Ketika properti rusak dan tidak bisa digunakan, bisnis tetap harus membayar gaji, sewa, dan biaya tetap lainnya — meski tidak ada pendapatan masuk. BI menanggung kerugian ini.
        </p>

        <h2>Tips Menghitung Nilai Pertanggungan yang Benar</h2>
        <p>
          Nilai pertanggungan harus berdasarkan <strong>Replacement Cost New (RCN)</strong> — biaya untuk membangun ulang bangunan yang sama dari nol dengan spesifikasi setara di harga konstruksi saat ini, bukan nilai pasar properti atau nilai buku.
        </p>
        <p>
          Underinsurance (nilai pertanggungan terlalu rendah) akan menyebabkan klaim Anda dibayar proporsional. Misalnya, jika nilai pertanggungan hanya 60% dari nilai sesungguhnya, klaim Anda pun hanya dibayar 60%.
        </p>

        <h2>Kesimpulan</h2>
        <p>
          Memilih asuransi properti yang tepat tidak harus rumit. Pahami jenis properti Anda, identifikasi risiko utama, dan pilih polis yang memberikan cakupan sesuai kebutuhan tanpa membayar lebih untuk coverage yang tidak Anda perlukan.
        </p>
        <p>
          Konsultan kami siap membantu Anda melakukan risk assessment dan merekomendasikan solusi asuransi properti terbaik untuk bisnis Anda. Konsultasi gratis, tanpa komitmen.
        </p>
      </BlogLayout>
    </>
  );
}
