module.exports = {
    // reactStrictMode: true,

    env: {
        BACKEND_BASE_URL: "http://54.175.147.224/",
        IMAGE_CLOUD_STORAGE_PREFIX: "http://localhost:3000/public/imagebucket/"
    },
    images: {
        domains: ['storage.googleapis.com'],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    },
}