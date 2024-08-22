import withPWA from "next-pwa";

/** @type {import('next-pwa').PWAConfig} */
const pwaConfig = {
  dest: "public",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static export for GH Pages
  output: "export",
  basePath: "/scythe-picker",
  images: {
    unoptimized: true,
  },
};

export default withPWA(pwaConfig)(nextConfig);
