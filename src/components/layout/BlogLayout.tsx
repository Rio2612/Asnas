import Link from "next/link";
import { Calendar, Clock, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import CtaSection from "@/components/ui/CtaSection";
import { SITE } from "@/lib/config";

interface RelatedPost {
  title: string;
  href: string;
}

interface BlogLayoutProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  children: React.ReactNode;
  relatedProducts?: RelatedPost[];
  relatedPosts?: RelatedPost[];
}

export default function BlogLayout({
  title,
  category,
  date,
  readTime,
  description,
  children,
  relatedProducts = [],
  relatedPosts = [],
}: BlogLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] pt-28 pb-14 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-[#c9a84c] text-sm font-dm mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Kembali ke Blog
          </Link>
          <span className="inline-block bg-[#c9a84c]/20 text-[#c9a84c] font-syne font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            {category}
          </span>
          <h1 className="font-syne font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="text-white/65 font-dm text-base mb-5">{description}</p>
          <div className="flex items-center gap-5 text-white/40 text-sm font-dm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {readTime} baca
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 bg-[#faf8f3]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl border border-[#e8e1ce] p-8 md:p-10 prose-navy">
            {children}
          </div>

          {/* CTA inline */}
          <div className="mt-8 bg-[#0a1628] rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="font-syne font-bold text-white text-lg mb-1">
                Butuh Konsultasi Asuransi?
              </p>
              <p className="text-white/60 text-sm font-dm">
                Chat langsung dengan{" "}
                <span className="text-[#c9a84c]">{SITE.consultant}</span> — gratis!
              </p>
            </div>
            <Link
              href={`${SITE.whatsappLink}?text=Halo%20Kak%20Rio%2C%20saya%20baca%20artikel%20${encodeURIComponent(title)}%20dan%20ingin%20konsultasi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#c9a84c] text-[#0a1628] font-syne font-bold px-6 py-3 rounded-xl hover:bg-[#e0bc60] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat WhatsApp
            </Link>
          </div>

          {/* Related products */}
          {relatedProducts.length > 0 && (
            <div className="mt-8">
              <h3 className="font-syne font-semibold text-[#0a1628] text-sm uppercase tracking-wider mb-3">
                Produk Terkait
              </h3>
              <div className="flex flex-wrap gap-2">
                {relatedProducts.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="inline-flex items-center gap-1.5 text-sm font-dm text-[#334155] bg-white border border-[#e8e1ce] px-4 py-2 rounded-full hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
                  >
                    {p.title} <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-6">
              <h3 className="font-syne font-semibold text-[#0a1628] text-sm uppercase tracking-wider mb-3">
                Artikel Terkait
              </h3>
              <div className="flex flex-wrap gap-2">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="text-sm font-dm text-[#334155] bg-white border border-[#e8e1ce] px-4 py-2 rounded-full hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
                  >
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
