module.exports = {
    // reactStrictMode: true,

    env: {
        BACKEND_BASE_URL: "127.0.0.1:8000/",
        IMAGE_CLOUD_STORAGE_PREFIX: "http://localhost:3000/public/imagebucket/"
    },
    images: {
        domains: ['storage.googleapis.com'],
    },
}