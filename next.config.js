/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdn.pandascore.co",
      "img-cdn.hltv.org",
      "purecatamphetamine.github.io",
    ],
  },
};

module.exports = nextConfig;
