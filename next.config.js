/** @type {import('next').NextConfig} */
const nextConfig = {
  // Commented out 'output: export' to enable API routes for email functionality
  // output: 'export', // Only use for static hosting without API routes
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

