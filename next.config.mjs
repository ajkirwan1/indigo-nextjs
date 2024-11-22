/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@node-rs/argon2"],
  },
  outputFileTracingIncludes: {
    "/": ["../../node_modules/argon2/prebuilds/linux-x64/*"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "next-js-image-bucket.s3.eu-central-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
