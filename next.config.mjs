/** @type {import('next').NextConfig} */


const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: ["i.pinimg.com", "localhost","chatmate-backend-production.up.railway.app"]
  },
  reactStrictMode: false
};
export default nextConfig;
