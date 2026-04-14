import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.duniaasuransi.com" }],
        destination: "https://duniaasuransi.com/:path*",
        permanent: true, // 308
      },
    ];
  },
};

export default nextConfig;
