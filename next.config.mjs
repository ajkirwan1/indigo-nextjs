/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@node-rs/argon2", '@aws-sdk/client-s3', '@aws-sdk/s3-request-presigner']
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
      {
        protocol: "https",
        hostname: "next-js-pdf-bucket.s3.eu-central-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
