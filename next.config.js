/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: "images.pexels.com",
                hostname: "images.squarespace-cdn.com"

            }
        ]
    }
}

module.exports = nextConfig
