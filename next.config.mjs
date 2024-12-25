/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // output: 'export',

//   images: {
//     unoptimized: true
// },
  experimental: {
    serverComponentsExternalPackages: [
      "@node-rs/argon2",
      "@aws-sdk/client-s3",
      "@aws-sdk/s3-request-presigner",
    ],
  },

  env: {CONTENTFUL_SPACE_ID:process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN:process.env.CONTENTFUL_ACCESS_TOKEN
  },
  // outputFileTracingIncludes: {
  //   "/": ["../../node_modules/argon2/prebuilds/linux-x64/*"],
  // },
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
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true

  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/admin/:slug*',
  //       destination: process.env.NEXT_PUBLIC_BASE_URL, // Matched parameters can be used in the destination
  //       permanent: false,
  //     },
  //   ]
  // },
};

export default nextConfig;
