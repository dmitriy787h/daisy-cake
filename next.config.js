/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['daisy-cake.ru'],
    unoptimized: true, // Отключаем оптимизацию для локальной разработки
  },
  // Принудительная очистка кэша
  generateEtags: false,
  poweredByHeader: false,
};

module.exports = nextConfig;