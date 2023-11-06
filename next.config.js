/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate-plugin');

const nextConfig = {
  transpilePackages: ['lucide-react', "next-translate", "next-translate-plugin"],
  output: "standalone",
  async redirects() {
    return [
      { source: '/', destination: '/fr-FR', permanent: true }
    ]

  }
}

module.exports = nextTranslate(nextConfig);
