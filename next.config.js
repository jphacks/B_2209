/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

rewrites: async () => [
  {
    source: "/public/myfile.html",
    destination: "/pages/api/myfile.js",
  },
],

module.exports = nextConfig;
