/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local images in /public are fine — no domains needed
    // Add remote domains here if you use external image URLs later
    domains: [],
    // Allow SVG logo files
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
