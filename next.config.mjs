/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "dev-to-uploads.s3.amazonaws.com",
      "media.dev.to",
      "dev.to",
      "res.cloudinary.com",
      "example.com",
      "i.pravatar.cc",
    ],
  },
};

export default nextConfig;
