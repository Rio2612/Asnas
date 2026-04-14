"use client";

import { useState } from "react";
import { Calculator, MessageCircle, Info } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/lib/config";

// OJK rate tables (per year, as percentage of vehicle value)
// Wilayah 1: Sumatera, Kalimantan, NTT, NTB, Maluku, Papua
// Wilayah 2: DKI Jakarta, Jawa Barat, Banten
// Wilayah 3: Jawa (selain W2), Bali, Sulawesi

type Wilayah = "w1" | "w2" | "w3";
type JenisPolis = "allrisk" | "tlo";
type JenisKendaraan = "konvensional" | "listrik";

interface CategoryRate {
  min: number;
  max: number;
}

type RateTable = {
  [key in Wilayah]: {
    allrisk: CategoryRate[];
    tlo: CategoryRate[];
  };
};

// Rate per price category (simplified OJK 2024)
// Categories by harga kendaraan (in juta):
// 1: <=125, 2: 125-200, 3: 200-300, 4: 300-500, 5: >500
const RATES: RateTable = {
  w1: {
    allrisk: [
      { min: 3.82, max: 4.20 },
      { min: 3.26, max: 3.59 },
      { min: 2.53, max: 2.78 },
      { min: 2.00, max: 2.20 },
      { min: 1.20, max: 1.32 },
    ],
    tlo: [
      { min: 0.47, max: 0.56 },
      { min: 0.63, max: 0.69 },
      { min: 0.69, max: 0.76 },
      { min: 0.65, max: 0.71 },
      { min: 0.59, max: 0.65 },
    ],
  },
  w2: {
    allrisk: [
      { min: 3.82, max: 4.20 },
      { min: 3.26, max: 3.59 },
      { min: 2.69, max: 2.96 },
      { min: 2.10, max: 2.31 },
      { min: 1.20, max: 1.32 },
    ],
    tlo: [
      { min: 0.51, max: 0.56 },
      { min: 0.63, max: 0.69 },
      { min: 0.69, max: 0.76 },
      { min: 0.65, max: 0.71 },
      { min: 0.59, max: 0.65 },
    ],
  },
  w3: {
    allrisk: [
      { min: 3.18, max: 3.50 },
      { min: 2.86, max: 3.15 },
      { min: 2.36, max: 2.60 },
      { min: 1.90, max: 2.09 },
      { min: 1.20, max: 1.32 },
    ],
    tlo: [
      { min: 0.43, max: 0.47 },
      { min: 0.59, max: 0.65 },
      { min: 0.59, max: 0.65 },
      { min: 0.57, max: 0.63 },
      { min: 0.57, max: 0.63 },
    ],
  },
};

// EV extra rate (additional % on top of base)
const EV_EXTRA = 0.5;

function getPriceCategory(hargaJuta: number): number {
  if (hargaJuta <= 125) return 0;
  if (hargaJuta <= 200) return 1;
  if (hargaJuta <= 300) return 2;
  if (hargaJuta <= 500) return 3;
  return 4;
}

function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function KalkulatorForm() {
  const [jenisPolis, setJenisPolis] = useState<JenisPolis>("allrisk");
  const [wilayah, setWilayah] = useState<Wilayah>("w2");
  const [jenisKendaraan, setJenisKendaraan] = useState<JenisKendaraan>("konvensional");
  const [hargaStr, setHargaStr] = useState("");
  const [result, setResult] = useState<null | {
    minPremi: number;
    maxPremi: number;
    minRate: number;
    maxRate: number;
    isEV: boolean;
  }>(null);

  function handleHitung() {
    const harga = parseFloat(hargaStr.replace(/[^0-9]/g, ""));
    if (!harga || harga < 50_000_000) return;

    const hargaJuta = harga / 1_000_000;
    const catIdx = getPriceCategory(hargaJuta);
    const rateObj = RATES[wilayah][jenisPolis][catIdx];

    let minRate = rateObj.min;
    let maxRate = rateObj.max;

    if (jenisKendaraan === "listrik") {
      // EV uses max rate + extra
      minRate = maxRate;
      maxRate = maxRate + EV_EXTRA;
    }

    setResult({
      minPremi: (harga * minRate) / 100,
      maxPremi: (harga * maxRate) / 100,
      minRate,
      maxRate,
      isEV: jenisKendaraan === "listrik",
    });
  }

  const wilayahOptions: { value: Wilayah; label: string; desc: string }[] = [
    {
      value: "w1",
      label: "Wilayah 1",
      desc: "Sumatera, Kalimantan, NTT, NTB, Maluku, Papua",
    },
    {
      value: "w2",
      label: "Wilayah 2",
      desc: "DKI Jakarta, Jawa Barat, Banten",
    },
    {
      value: "w3",
      label: "Wilayah 3",
      desc: "Jawa (selain W2), Bali, Sulawesi",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl border border-[#e8e1ce] p-8 shadow-sm">
        {/* Jenis Polis */}
        <div className="mb-6">
          <label className="block font-syne font-semibold text-[#0a1628] text-sm mb-3">
            Jenis Polis
          </label>
          <div className="grid grid-cols-2 gap-3">
            {(
              [
                { value: "allrisk", label: "All Risk", desc: "Semua risiko" },
                { value: "tlo", label: "TLO", desc: "Total Loss Only" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.value}
                onClick={() => setJenisPolis(opt.value)}
                className={`py-3 px-4 rounded-xl border-2 text-left transition-all ${
                  jenisPolis === opt.value
                    ? "border-[#c9a84c] bg-[#c9a84c]/10"
                    : "border-[#e8e1ce] hover:border-[#c9a84c]/50"
                }`}
              >
                <div className="font-syne font-bold text-[#0a1628] text-sm">
                  {opt.label}
                </div>
                <div className="text-[#64748b] text-xs font-dm">{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Wilayah */}
        <div className="mb-6">
          <label className="block font-syne font-semibold text-[#0a1628] text-sm mb-3">
            Wilayah Kendaraan
          </label>
          <div className="space-y-2">
            {wilayahOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setWilayah(opt.value)}
                className={`w-full py-3 px-4 rounded-xl border-2 text-left transition-all ${
                  wilayah === opt.value
                    ? "border-[#c9a84c] bg-[#c9a84c]/10"
                    : "border-[#e8e1ce] hover:border-[#c9a84c]/50"
                }`}
              >
                <span className="font-syne font-bold text-[#0a1628] text-sm">
                  {opt.label}
                </span>
                <span className="text-[#64748b] text-xs font-dm ml-2">
                  — {opt.desc}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Jenis Kendaraan */}
        <div className="mb-6">
          <label className="block font-syne font-semibold text-[#0a1628] text-sm mb-3">
            Jenis Kendaraan
          </label>
          <div className="grid grid-cols-2 gap-3">
            {(
              [
                {
                  value: "konvensional",
                  label: "Konvensional",
                  desc: "BBM / Hybrid",
                },
                { value: "listrik", label: "Mobil Listrik", desc: "EV / BEV" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.value}
                onClick={() => setJenisKendaraan(opt.value)}
                className={`py-3 px-4 rounded-xl border-2 text-left transition-all ${
                  jenisKendaraan === opt.value
                    ? "border-[#c9a84c] bg-[#c9a84c]/10"
                    : "border-[#e8e1ce] hover:border-[#c9a84c]/50"
                }`}
              >
                <div className="font-syne font-bold text-[#0a1628] text-sm">
                  {opt.label}
                </div>
                <div className="text-[#64748b] text-xs font-dm">{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Harga Kendaraan */}
        <div className="mb-6">
          <label className="block font-syne font-semibold text-[#0a1628] text-sm mb-3">
            Harga Kendaraan (IDR)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b] font-dm text-sm">
              Rp
            </span>
            <input
              type="text"
              placeholder="200.000.000"
              value={hargaStr}
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, "");
                const formatted = raw
                  ? Number(raw).toLocaleString("id-ID")
                  : "";
                setHargaStr(formatted);
              }}
              className="w-full pl-10 pr-4 py-3.5 border-2 border-[#e8e1ce] rounded-xl font-dm text-[#0a1628] focus:border-[#c9a84c] focus:outline-none transition-colors"
            />
          </div>
          <p className="text-[#94a3b8] text-xs font-dm mt-1.5">
            Masukkan harga kendaraan minimal Rp 50.000.000
          </p>
        </div>

        <button
          onClick={handleHitung}
          className="w-full bg-[#0a1628] text-white font-syne font-bold py-4 rounded-xl hover:bg-[#1a2a48] transition-colors flex items-center justify-center gap-2"
        >
          <Calculator className="w-5 h-5" />
          Hitung Estimasi Premi
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="mt-6 bg-[#0a1628] rounded-3xl p-8 text-white">
          <div className="text-center mb-6">
            <span className="text-[#c9a84c] font-syne font-semibold text-xs tracking-widest uppercase">
              Estimasi Premi Tahunan
            </span>
            <div className="mt-3 font-syne font-black text-3xl text-white">
              {formatRupiah(result.minPremi)}
            </div>
            <div className="text-white/50 font-dm text-sm mt-1">
              s/d {formatRupiah(result.maxPremi)}
            </div>
            <div className="text-white/40 font-dm text-xs mt-1">
              Rate: {result.minRate}% – {result.maxRate}% dari harga kendaraan
            </div>
          </div>

          {result.isEV && (
            <div className="flex items-start gap-3 bg-[#c9a84c]/15 border border-[#c9a84c]/30 rounded-xl p-4 mb-5 text-sm">
              <Info className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
              <p className="text-white/80 font-dm">
                Mobil listrik menggunakan rate maksimal + surcharge EV.
                Deductible / OR Rp 500.000 per kejadian berlaku sesuai polis.
              </p>
            </div>
          )}

          <div className="bg-white/5 rounded-xl p-4 mb-6 text-sm">
            <p className="text-white/60 font-dm">
              * Estimasi berdasarkan tarif OJK terbaru. Premi final dapat
              berbeda tergantung kondisi kendaraan, klaim history, dan
              underwriting perusahaan asuransi.
            </p>
          </div>

          <div className="text-center">
            <p className="text-white/60 font-dm text-sm mb-4">
              💰 Dapatkan{" "}
              <span className="text-[#c9a84c] font-bold">
                diskon s/d Rp 1.000.000
              </span>{" "}
              dengan menghubungi langsung
            </p>
            <Link
              href={`${SITE.whatsappLink}?text=Halo%20Kak%20Rio%2C%20saya%20ingin%20tanya%20asuransi%20mobil%20dan%20minta%20diskon.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#c9a84c] text-[#0a1628] font-syne font-bold px-7 py-3.5 rounded-xl hover:bg-[#e0bc60] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Chat & Dapatkan Diskon
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
