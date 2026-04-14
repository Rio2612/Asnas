import Link from "next/link";
import { CheckCircle, MessageCircle } from "lucide-react";
import CtaSection from "@/components/ui/CtaSection";
import { SITE } from "@/lib/config";
import type { LucideIcon } from "lucide-react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface PolicyTier {
  name: string;
  tag: string;
  features: string[];
  highlighted?: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface RelatedLink {
  label: string;
  href: string;
}

interface ProductPageProps {
  badge: string;
  title: string;
  description: string;
  benefits: Benefit[];
  policyTiers: PolicyTier[];
  faqs: FaqItem[];
  relatedLinks?: RelatedLink[];
  ctaTitle?: string;
}

export default function ProductPage({
  badge,
  title,
  description,
  benefits,
  policyTiers,
  faqs,
  relatedLinks,
  ctaTitle,
}: ProductPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c9a84c] rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-[#c9a84c]/20 text-[#c9a84c] font-syne font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            {badge}
          </span>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-5 leading-tight">
            {title}
          </h1>
          <p className="text-white/70 font-dm text-lg max-w-2xl mx-auto mb-8">
            {description}
          </p>
          <Link
            href={`${SITE.whatsappLink}?text=Halo%20Kak%20Rio%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#c9a84c] text-[#0a1628] font-syne font-bold px-8 py-4 rounded-xl hover:bg-[#e0bc60] transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Konsultasi Gratis
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-[#faf8f3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-syne font-bold text-3xl text-[#0a1628] mb-3">
              Manfaat & Perlindungan
            </h2>
            <p className="text-[#334155] font-dm">
              Cakupan komprehensif untuk ketenangan pikiran Anda
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-[#e8e1ce] hover:border-[#c9a84c]/50 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-[#0a1628] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#c9a84c] transition-colors">
                    <Icon className="w-6 h-6 text-[#c9a84c] group-hover:text-[#0a1628]" />
                  </div>
                  <h3 className="font-syne font-semibold text-[#0a1628] text-base mb-2">
                    {b.title}
                  </h3>
                  <p className="text-[#64748b] text-sm font-dm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policy Comparison */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-syne font-bold text-3xl text-[#0a1628] mb-3">
              Perbandingan Polis
            </h2>
            <p className="text-[#334155] font-dm">
              Pilih paket yang sesuai kebutuhan Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {policyTiers.map((tier, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 border-2 ${
                  tier.highlighted
                    ? "bg-[#0a1628] border-[#c9a84c] relative"
                    : "bg-[#faf8f3] border-[#e8e1ce]"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c9a84c] text-[#0a1628] text-xs font-syne font-bold px-3 py-1 rounded-full">
                    POPULER
                  </span>
                )}
                <div className="mb-2">
                  <span
                    className={`text-xs font-syne font-semibold tracking-widest uppercase ${
                      tier.highlighted ? "text-[#c9a84c]" : "text-[#c9a84c]"
                    }`}
                  >
                    {tier.tag}
                  </span>
                </div>
                <h3
                  className={`font-syne font-bold text-xl mb-5 ${
                    tier.highlighted ? "text-white" : "text-[#0a1628]"
                  }`}
                >
                  {tier.name}
                </h3>
                <ul className="space-y-2.5">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          tier.highlighted ? "text-[#c9a84c]" : "text-[#c9a84c]"
                        }`}
                      />
                      <span
                        className={`text-sm font-dm ${
                          tier.highlighted ? "text-white/80" : "text-[#334155]"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${SITE.whatsappLink}?text=Halo%2C%20saya%20tertarik%20paket%20${encodeURIComponent(tier.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 block text-center text-sm font-syne font-semibold py-3 rounded-xl transition-all ${
                    tier.highlighted
                      ? "bg-[#c9a84c] text-[#0a1628] hover:bg-[#e0bc60]"
                      : "bg-[#0a1628] text-white hover:bg-[#1a2a48]"
                  }`}
                >
                  Pilih Paket Ini
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#faf8f3]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-syne font-bold text-3xl text-[#0a1628] mb-3">
              Pertanyaan Umum
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#e8e1ce]">
                <h3 className="font-syne font-semibold text-[#0a1628] mb-2">{faq.q}</h3>
                <p className="text-[#334155] text-sm font-dm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="py-10 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-syne font-semibold text-[#0a1628] text-sm uppercase tracking-wider mb-4">
              Produk Terkait
            </h3>
            <div className="flex flex-wrap gap-2">
              {relatedLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm font-dm text-[#334155] bg-[#faf8f3] border border-[#e8e1ce] px-4 py-2 rounded-full hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection title={ctaTitle} showCalc={false} />
    </>
  );
}
