/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents:true,
  },
}

module.exports = {
  // ...
  baseUrl: ".",
  trailingSlash: true,
}

module.exports = nextConfig
