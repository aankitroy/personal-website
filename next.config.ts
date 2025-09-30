import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Performance optimizations
  compress: true,
  
  // PWA capabilities (optional - makes site installable on mobile)
  // Uncomment if you want progressive web app features
  // headers: async () => [
  //   {
  //     source: '/:path*',
  //     headers: [
  //       {
  //         key: 'X-DNS-Prefetch-Control',
  //         value: 'on'
  //       }
  //     ]
  //   }
  // ]
};

export default nextConfig;
