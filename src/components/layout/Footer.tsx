import Link from "next/link";
import { Shield, Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { SITE } from "@/lib/config";

const footerLinks = {
  properti: [
    { label: "Property All Risk", href: "/property-all-risk" },
    { label: "Industrial All Risk", href: "/industrial-all-risk" },
    { label: "Asuransi Kebakaran", href: "/asuransi-kebakaran" },
    { label: "Asuransi Rumah", href: "/asuransi-rumah" },
    { label: "Asuransi Gudang", href: "/asuransi-gudang" },
  ],
  kendaraan: [
    { label: "Asuransi Mobil", href: "/asuransi-mobil" },
    { label: "Asuransi Mobil Listrik", href: "/asuransi-mobil-listrik" },
    { label: "Asuransi Motor", href: "/asuransi-motor" },
    { label: "Asuransi Truk", href: "/asuransi-truk" },
    { label: "Asuransi Dump Truck", href: "/asuransi-dump-truck" },
  ],
  engineering: [
    { label: "Contractor All Risk", href: "/contractor-all-risk" },
    { label: "Erection All Risk", href: "/erection-all-risk" },
    { label: "Machinery Breakdown", href: "/machinery-breakdown" },
    { label: "Asuransi Alat Berat", href: "/asuransi-alat-berat" },
    { label: "Surety Bond", href: "/surety-bond" },
  ],
  lainnya: [
    { label: "Asuransi Kargo", href: "/asuransi-kargo" },
    { label: "Asuransi Kapal", href: "/asuransi-kapal" },
    { label: "Public Liability", href: "/public-liability" },
    { label: "Professional Indemnity", href: "/asuransi-professional-indemnity" },
    { label: "Asuransi Limbah B3", href: "/asuransi-limbah-b3" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-[#c9a84c] rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#0a1628]" />
              </div>
              <span className="font-syne font-bold text-xl">
                Dunia<span className="text-[#c9a84c]">Asuransi</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed font-dm mb-6">
              {SITE.tagline}. Konsultasi gratis dengan tenaga ahli berpengalaman
              untuk solusi perlindungan terbaik bagi aset Anda.
            </p>
            <div className="space-y-2.5">
              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[#c9a84c] transition-colors font-dm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {SITE.whatsapp}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[#c9a84c] transition-colors font-dm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {SITE.email}
              </a>
              <span className="flex items-center gap-2 text-sm text-white/70 font-dm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Indonesia (Layanan Nasional)
              </span>
            </div>
          </div>

          {/* Properti */}
          <div>
            <h3 className="font-syne font-semibold text-[#c9a84c] mb-4 text-sm uppercase tracking-wider">
              Properti
            </h3>
            <ul className="space-y-2">
              {footerLinks.properti.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-[#c9a84c] transition-colors font-dm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kendaraan */}
          <div>
            <h3 className="font-syne font-semibold text-[#c9a84c] mb-4 text-sm uppercase tracking-wider">
              Kendaraan
            </h3>
            <ul className="space-y-2">
              {footerLinks.kendaraan.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-[#c9a84c] transition-colors font-dm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering */}
          <div>
            <h3 className="font-syne font-semibold text-[#c9a84c] mb-4 text-sm uppercase tracking-wider">
              Engineering
            </h3>
            <ul className="space-y-2">
              {footerLinks.engineering.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-[#c9a84c] transition-colors font-dm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lainnya */}
          <div>
            <h3 className="font-syne font-semibold text-[#c9a84c] mb-4 text-sm uppercase tracking-wider">
              Marine & Liability
            </h3>
            <ul className="space-y-2">
              {footerLinks.lainnya.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-[#c9a84c] transition-colors font-dm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-dm">
            © {new Date().getFullYear()} {SITE.name}. Seluruh hak dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/tentang-kami" className="text-xs text-white/40 hover:text-[#c9a84c] transition-colors font-dm">
              Tentang Kami
            </Link>
            <Link href="/kontak" className="text-xs text-white/40 hover:text-[#c9a84c] transition-colors font-dm">
              Kontak
            </Link>
            <Link href="/blog" className="text-xs text-white/40 hover:text-[#c9a84c] transition-colors font-dm">
              Blog
            </Link>
            <Link href="/kalkulator-premi-mobil" className="text-xs text-white/40 hover:text-[#c9a84c] transition-colors font-dm">
              Kalkulator
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
