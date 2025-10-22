/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['daisy-cake.ru'],
    unoptimized: false, // Включаем оптимизацию изображений
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 дней кэш
  },
  // Включаем сжатие
  compress: true,
  // Принудительная очистка кэша
  generateEtags: true,
  poweredByHeader: false,
  // Оптимизация сборки
  swcMinify: true,
};

module.exports = nextConfig;