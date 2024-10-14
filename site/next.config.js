/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'A Kasm Registry',
    description: 'Some Kasm workspaces.',
    icon: 'https://user-images.githubusercontent.com/5698566/230345149-ef757e51-6eb9-479d-94f5-a13e4ad33b03.png',
    listUrl: 'https://d-x-b.github.io/aakasmr/',
    contactUrl: 'https://d-x-b.github.io/aakasmr/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/aakasmr/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
