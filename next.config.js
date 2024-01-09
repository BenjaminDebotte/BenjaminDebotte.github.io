/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./i18n.js');

const nextConfig = {
  transpilePackages: ['lucide-react', "next-translate", "next-translate-plugin"],
  output: "export",
  images: {
    unoptimized: true
  }
}

module.exports = withNextIntl(nextConfig);
