"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/config";

export default function KontakForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nama: "",
    telepon: "",
    email: "",
    kebutuhan: "",
    pesan: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    if (!form.nama || !form.telepon) return;
    const msg = `Halo Kak Rio, perkenalkan saya ${form.nama}. Nomor: ${form.telepon}. Kebutuhan: ${form.kebutuhan || "belum ditentukan"}. ${form.pesan}`;
    window.open(
      `${SITE.whatsappLink}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-syne font-bold text-[#0a1628] text-xl mb-2">
          Terima Kasih!
        </h3>
        <p className="text-[#64748b] font-dm text-sm">
          Kami akan segera menghubungi Anda via WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-syne font-semibold text-[#0a1628] text-sm mb-1.5">
            Nama Lengkap <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            placeholder="Nama Anda"
            className="w-full px-4 py-3 border-2 border-[#e8e1ce] rounded-xl font-dm text-sm text-[#0a1628] focus:border-[#c9a84c] focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block font-syne font-semibold text-[#0a1628] text-sm mb-1.5">
            Nomor WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="telepon"
            value={form.telepon}
            onChange={handleChange}
            placeholder="08xxxxxxxxxx"
            className="w-full px-4 py-3 border-2 border-[#e8e1ce] rounded-xl font-dm text-sm text-[#0a1628] focus:border-[#c9a84c] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block font-syne font-semibold text-[#0a1628] text-sm mb-1.5">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="email@perusahaan.com"
          className="w-full px-4 py-3 border-2 border-[#e8e1ce] rounded-xl font-dm text-sm text-[#0a1628] focus:border-[#c9a84c] focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block font-syne font-semibold text-[#0a1628] text-sm mb-1.5">
          Jenis Asuransi yang Dibutuhkan
        </label>
        <select
          name="kebutuhan"
          value={form.kebutuhan}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-[#e8e1ce] rounded-xl font-dm text-sm text-[#0a1628] focus:border-[#c9a84c] focus:outline-none transition-colors bg-white"
        >
          <option value="">-- Pilih jenis asuransi --</option>
          <option value="Asuransi Properti">Asuransi Properti</option>
          <option value="Asuransi Kendaraan">Asuransi Kendaraan</option>
          <option value="Asuransi Alat Berat">Asuransi Alat Berat</option>
          <option value="Asuransi Engineering (CAR/EAR)">Asuransi Engineering (CAR/EAR)</option>
          <option value="Asuransi Marine Cargo">Asuransi Marine Cargo</option>
          <option value="Asuransi Liability">Asuransi Liability</option>
          <option value="Surety Bond">Surety Bond</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>

      <div>
        <label className="block font-syne font-semibold text-[#0a1628] text-sm mb-1.5">
          Pesan / Keterangan
        </label>
        <textarea
          name="pesan"
          value={form.pesan}
          onChange={handleChange}
          rows={4}
          placeholder="Ceritakan kebutuhan asuransi Anda secara singkat..."
          className="w-full px-4 py-3 border-2 border-[#e8e1ce] rounded-xl font-dm text-sm text-[#0a1628] focus:border-[#c9a84c] focus:outline-none transition-colors resize-none"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={!form.nama || !form.telepon}
        className="w-full bg-[#0a1628] text-white font-syne font-bold py-4 rounded-xl hover:bg-[#1a2a48] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        Kirim via WhatsApp
      </button>

      <p className="text-[#94a3b8] text-xs font-dm text-center">
        Formulir ini akan membuka WhatsApp dengan pesan otomatis kepada konsultan kami.
      </p>
    </div>
  );
}
