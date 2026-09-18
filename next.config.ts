import type { NextConfig } from "next"

const securityHeaders = [
  { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
]

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() { return [{ source: "/(.*)", headers: securityHeaders }] },
  async redirects() {
    return [
      { source: "/framework-model", destination: "/standard", permanent: true },
      { source: "/reference/sample-record", destination: "/examples/claims-referral", permanent: true },
      { source: "/certification", destination: "/conformance", permanent: true },
      { source: "/marks", destination: "/conformance", permanent: true },
      { source: "/stewardship", destination: "/governance", permanent: true },
      { source: "/consent", destination: "/privacy", permanent: true },
      { source: "/examples/claims-referral-qualified.json", destination: "/examples/fictional-claims-referral-qualified.json", permanent: true },
      { source: "/examples/claims-referral-qualified-result.json", destination: "/examples/fictional-claims-referral-qualified-result.json", permanent: true },
    ]
  },
}

export default nextConfig
