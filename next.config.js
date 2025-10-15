/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // <-- add this line to enable static export
  images: {
    unoptimized: true, // ✅ disable built-in image optimization
  },
  env: {
    ASSET_VERSION: new Date().getTime().toString(), // Or use package.json version
  },
  eslint: {
    // ✅ This will ignore ESLint errors during `next build`
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
