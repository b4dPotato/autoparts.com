import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.1.101'],
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};

export default withNextIntl(nextConfig);
