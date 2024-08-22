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

export default nextConfig;
