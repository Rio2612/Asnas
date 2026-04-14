import type { MetadataRoute } from "next";

const BASE = "https://duniaasuransi.com";

const staticRoutes: Array<{
  url: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  // Homepage
  { url: "/", priority: 1.0, changeFrequency: "weekly" },

  // Tools & info
  { url: "/kalkulator-premi-mobil", priority: 0.9, changeFrequency: "monthly" },
  { url: "/tentang-kami", priority: 0.7, changeFrequency: "monthly" },
  { url: "/kontak", priority: 0.8, changeFrequency: "monthly" },
  { url: "/blog", priority: 0.8, changeFrequency: "weekly" },

  // Pillar pages
  { url: "/asuransi-properti", priority: 0.95, changeFrequency: "monthly" },
  { url: "/asuransi-kendaraan", priority: 0.95, changeFrequency: "monthly" },
  { url: "/asuransi-machinery", priority: 0.95, changeFrequency: "monthly" },
  { url: "/asuransi-engineering", priority: 0.95, changeFrequency: "monthly" },
  { url: "/asuransi-liability", priority: 0.95, changeFrequency: "monthly" },
  { url: "/asuransi-marine", priority: 0.95, changeFrequency: "monthly" },
  { url: "/surety-bond", priority: 0.95, changeFrequency: "monthly" },

  // Properti sub-pages
  { url: "/property-all-risk", priority: 0.85, changeFrequency: "monthly" },
  { url: "/industrial-all-risk", priority: 0.85, changeFrequency: "monthly" },
  { url: "/asuransi-kebakaran", priority: 0.85, changeFrequency: "monthly" },
  { url: "/business-interruption", priority: 0.85, changeFrequency: "monthly" },
  { url: "/asuransi-hotel", priority: 0.80, changeFrequency: "monthly" },
  { url: "/asuransi-rumah", priority: 0.85, changeFrequency: "monthly" },
  { url: "/asuransi-gedung-komersial", priority: 0.80, changeFrequency: "monthly" },
  { url: "/asuransi-gudang", priority: 0.80, changeFrequency: "monthly" },

  // Kendaraan sub-pages
  { url: "/asuransi-mobil", priority: 0.90, changeFrequency: "monthly" },
  { url: "/asuransi-mobil-listrik", priority: 0.90, changeFrequency: "monthly" },
  { url: "/asuransi-motor", priority: 0.85, changeFrequency: "monthly" },
  { url: "/asuransi-truk", priority: 0.85, changeFrequency: "monthly" },
  { url: "/asuransi-dump-truck", priority: 0.80, changeFrequency: "monthly" },
  { url: "/asuransi-motor-vehicle", priority: 0.80, changeFrequency: "monthly" },
  { url: "/asuransi-car-indonesia", priority: 0.80, changeFrequency: "monthly" },

  // Machinery sub-pages
  { url: "/asuransi-alat-berat", priority: 0.90, changeFrequency: "monthly" },
  { url: "/asuransi-crane", priority: 0.85, changeFrequency: "monthly" },
  { url: "/asuransi-excavator", priority: 0.85, changeFrequency: "monthly" },
  { url: "/asuransi-bulldozer", priority: 0.80, changeFrequency: "monthly" },
  { url: "/asuransi-wheel-loader", priority: 0.80, changeFrequency: "monthly" },
  { url: "/asuransi-motor-grader", priority: 0.75, changeFrequency: "monthly" },
  { url: "/asuransi-forklift", priority: 0.80, changeFrequency: "monthly" },

  // Engineering sub-pages
  { url: "/contractor-all-risk", priority: 0.88, changeFrequency: "monthly" },
  { url: "/erection-all-risk", priority: 0.88, changeFrequency: "monthly" },
  { url: "/machinery-breakdown", priority: 0.88, changeFrequency: "monthly" },
  { url: "/machinery-loss-of-profit", priority: 0.80, changeFrequency: "monthly" },
  { url: "/asuransi-ear", priority: 0.80, changeFrequency: "monthly" },
  { url: "/asuransi-erection-all-risks", priority: 0.78, changeFrequency: "monthly" },
  { url: "/asuransi-machinery-breakdown", priority: 0.70, changeFrequency: "monthly" },

  // Liability sub-pages
  { url: "/public-liability", priority: 0.88, changeFrequency: "monthly" },
  { url: "/product-liability", priority: 0.88, changeFrequency: "monthly" },
  { url: "/asuransi-professional-indemnity", priority: 0.85, changeFrequency: "monthly" },
  { url: "/directors-officers-liability", priority: 0.82, changeFrequency: "monthly" },
  { url: "/employers-liability", priority: 0.82, changeFrequency: "monthly" },
  { url: "/asuransi-limbah-b3", priority: 0.85, changeFrequency: "monthly" },
  { url: "/asuransi-liability-limbah-b3", priority: 0.80, changeFrequency: "monthly" },
  { url: "/asuransi-product-liability", priority: 0.75, changeFrequency: "monthly" },
  { url: "/asuransi-public-liability", priority: 0.75, changeFrequency: "monthly" },

  // Marine sub-pages
  { url: "/asuransi-kargo", priority: 0.88, changeFrequency: "monthly" },
  { url: "/asuransi-kapal", priority: 0.85, changeFrequency: "monthly" },
  { url: "/marine-insurance", priority: 0.82, changeFrequency: "monthly" },
  { url: "/hull-machinery-insurance", priority: 0.80, changeFrequency: "monthly" },
  { url: "/freight-insurance", priority: 0.78, changeFrequency: "monthly" },
  { url: "/protection-indemnity", priority: 0.78, changeFrequency: "monthly" },
  { url: "/asuransi-kargo-batam", priority: 0.75, changeFrequency: "monthly" },
  { url: "/asuransi-pengiriman-barang", priority: 0.78, changeFrequency: "monthly" },

  // Surety sub-pages
  { url: "/jaminan-penawaran", priority: 0.82, changeFrequency: "monthly" },
  { url: "/jaminan-pelaksanaan", priority: 0.82, changeFrequency: "monthly" },
  { url: "/jaminan-uang-muka", priority: 0.80, changeFrequency: "monthly" },
  { url: "/jaminan-pemeliharaan", priority: 0.80, changeFrequency: "monthly" },

  // Blog posts
  { url: "/blog/cara-klaim-asuransi-mobil", priority: 0.75, changeFrequency: "yearly" },
  { url: "/blog/perbedaan-all-risk-dan-tlo", priority: 0.75, changeFrequency: "yearly" },
  { url: "/blog/panduan-asuransi-alat-berat", priority: 0.75, changeFrequency: "yearly" },
  { url: "/blog/pentingnya-asuransi-limbah-b3", priority: 0.75, changeFrequency: "yearly" },
  { url: "/blog/asuransi-engineering-untuk-kontraktor", priority: 0.75, changeFrequency: "yearly" },
  { url: "/blog/cara-memilih-asuransi-properti", priority: 0.75, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: `${BASE}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
