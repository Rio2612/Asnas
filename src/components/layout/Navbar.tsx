"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Shield } from "lucide-react";
import { NAV_PRODUCTS, SITE } from "@/lib/config";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10">
      <div ref={navRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 bg-[#c9a84c] rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#0a1628]" />
            </div>
            <span className="font-syne font-bold text-white text-lg leading-tight">
              Dunia<br className="hidden" />
              <span className="text-[#c9a84c]">Asuransi</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_PRODUCTS.map((cat) => (
              <div
                key={cat.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(cat.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={cat.href}
                  className="flex items-center gap-1 text-sm text-white/80 hover:text-[#c9a84c] transition-colors px-3 py-2 rounded-md hover:bg-white/5 font-dm"
                >
                  {cat.label}
                  <ChevronDown className="w-3.5 h-3.5 mt-0.5" />
                </Link>
                {openDropdown === cat.href && (
                  <div className="absolute top-full left-0 pt-1 z-50">
                    <div className="bg-[#0a1628] border border-white/10 rounded-xl shadow-2xl p-2 min-w-[220px]">
                      {cat.children.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-3 py-2 text-sm text-white/70 hover:text-[#c9a84c] hover:bg-white/5 rounded-lg transition-colors font-dm"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/kalkulator-premi-mobil"
              className="text-sm text-white/70 hover:text-[#c9a84c] transition-colors font-dm px-3 py-2"
            >
              Kalkulator
            </Link>
            <Link
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c9a84c] text-[#0a1628] font-syne font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#e0bc60] transition-colors"
            >
              Konsultasi Gratis
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a1628] border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {NAV_PRODUCTS.map((cat) => (
              <div key={cat.href}>
                <button
                  className="flex items-center justify-between w-full text-left text-white/80 hover:text-[#c9a84c] py-2.5 text-sm font-dm"
                  onClick={() =>
                    setOpenMobileSub(openMobileSub === cat.href ? null : cat.href)
                  }
                >
                  {cat.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openMobileSub === cat.href ? "rotate-180" : ""}`}
                  />
                </button>
                {openMobileSub === cat.href && (
                  <div className="pl-4 border-l border-[#c9a84c]/30 ml-2 space-y-1 mb-2">
                    {cat.children.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-sm text-white/60 hover:text-[#c9a84c] font-dm"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/kalkulator-premi-mobil"
                className="text-center text-white/70 hover:text-[#c9a84c] py-2.5 text-sm font-dm"
                onClick={() => setMobileOpen(false)}
              >
                Kalkulator Premi Mobil
              </Link>
              <Link
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c9a84c] text-[#0a1628] font-syne font-semibold text-sm py-3 rounded-lg text-center"
                onClick={() => setMobileOpen(false)}
              >
                Konsultasi Gratis
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
