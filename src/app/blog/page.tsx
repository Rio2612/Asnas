import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ChevronRight, BookOpen } from "lucide-react";
import CtaSection from "@/components/ui/CtaSection";

export const metadata: Metadata = {
  title: "Blog Asuransi | Panduan & Tips Asuransi Kerugian Indonesia",
  description:
    "Artikel dan panduan lengkap seputar asuransi kerugian — cara klaim, perbandingan produk, tips memilih asuransi terbaik untuk bisnis dan pribadi Anda.",
  alternates: { canonical: "https://duniaasuransi.com/blog" },
  openGraph: {
    title: "Blog Asuransi | Dunia Asuransi",
    description: "Panduan, tips, dan informasi terkini seputar asuransi kerugian Indonesia.",
    url: "https://duniaasuransi.com/blog",
  },
};

const posts = [
  {
    slug: "cara-klaim-asuransi-mobil",
    title: "Cara Klaim Asuransi Mobil yang Benar & Cepat",
    excerpt:
      "Panduan langkah demi langkah cara mengajukan klaim asuransi mobil All Risk dan TLO — dokumen yang dibutuhkan, tips agar klaim tidak ditolak.",
    category: "Asuransi Kendaraan",
    readTime: "7 menit",
    date: "2025-03-15",
    related: "/asuransi-mobil",
  },
  {
    slug: "perbedaan-all-risk-dan-tlo",
    title: "Perbedaan All Risk dan TLO: Mana yang Lebih Tepat?",
    excerpt:
      "Penjelasan lengkap perbedaan asuransi kendaraan All Risk vs TLO — cakupan, premi, dan rekomendasi untuk berbagai jenis kendaraan.",
    category: "Asuransi Kendaraan",
    readTime: "6 menit",
    date: "2025-03-10",
    related: "/asuransi-kendaraan",
  },
  {
    slug: "panduan-asuransi-alat-berat",
    title: "Panduan Lengkap Asuransi Alat Berat untuk Kontraktor",
    excerpt:
      "Semua yang perlu Anda ketahui tentang asuransi excavator, bulldozer, crane, dan alat berat lainnya — jenis polis, nilai pertanggungan, dan cara klaim.",
    category: "Alat Berat & Machinery",
    readTime: "10 menit",
    date: "2025-02-28",
    related: "/asuransi-alat-berat",
  },
  {
    slug: "pentingnya-asuransi-limbah-b3",
    title: "Mengapa Perusahaan Industri Wajib Punya Asuransi Limbah B3?",
    excerpt:
      "Penjelasan regulasi KLHK soal kewajiban jaminan finansial limbah B3, risiko hukum jika tidak patuh, dan cara memilih polis yang tepat.",
    category: "Asuransi Liability",
    readTime: "8 menit",
    date: "2025-02-20",
    related: "/asuransi-limbah-b3",
  },
  {
    slug: "asuransi-engineering-untuk-kontraktor",
    title: "Asuransi Engineering untuk Kontraktor: CAR, EAR, dan MB",
    excerpt:
      "Panduan memahami jenis-jenis asuransi engineering — Contractor All Risk, Erection All Risk, dan Machinery Breakdown untuk kebutuhan proyek Anda.",
    category: "Asuransi Engineering",
    readTime: "9 menit",
    date: "2025-02-10",
    related: "/asuransi-engineering",
  },
  {
    slug: "cara-memilih-asuransi-properti",
    title: "Cara Memilih Asuransi Properti yang Tepat untuk Bisnis",
    excerpt:
      "Tips praktis memilih antara Property All Risk, Industrial All Risk, dan asuransi kebakaran biasa — sesuai jenis dan nilai properti bisnis Anda.",
    category: "Asuransi Properti",
    readTime: "8 menit",
    date: "2025-01-25",
    related: "/asuransi-properti",
  },
];

const categoryColors: Record<string, string> = {
  "Asuransi Kendaraan": "bg-blue-100 text-blue-700",
  "Alat Berat & Machinery": "bg-yellow-100 text-yellow-700",
  "Asuransi Liability": "bg-purple-100 text-purple-700",
  "Asuransi Engineering": "bg-orange-100 text-orange-700",
  "Asuransi Properti": "bg-green-100 text-green-700",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-[#c9a84c]/20 text-[#c9a84c] font-syne font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            <BookOpen className="w-3.5 h-3.5" />
            Blog & Panduan
          </span>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
            Panduan Asuransi Kerugian Indonesia
          </h1>
          <p className="text-white/70 font-dm text-lg max-w-2xl mx-auto">
            Artikel informatif dan praktis untuk membantu Anda memahami, memilih, dan mengklaim asuransi kerugian dengan benar.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 px-4 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-[#e8e1ce] hover:border-[#c9a84c]/50 hover:shadow-xl transition-all overflow-hidden flex flex-col"
              >
                {/* Category color band */}
                <div className="h-1.5 bg-[#c9a84c]" />
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className={`inline-block text-xs font-syne font-semibold px-3 py-1 rounded-full mb-3 ${
                      categoryColors[post.category] ?? "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {post.category}
                  </span>
                  <h2 className="font-syne font-bold text-[#0a1628] text-base leading-snug mb-3 group-hover:text-[#c9a84c] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#64748b] text-sm font-dm leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#f1ede4]">
                    <div className="flex items-center gap-3 text-xs text-[#94a3b8] font-dm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[#c9a84c] text-xs font-syne font-semibold group-hover:gap-2 transition-all">
                      Baca <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Butuh Penjelasan Lebih Lanjut?"
        description="Konsultasikan kebutuhan asuransi Anda langsung dengan konsultan kami."
        showCalc={false}
      />
    </>
  );
}
