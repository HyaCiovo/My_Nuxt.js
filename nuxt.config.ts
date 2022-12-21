export default defineNuxtConfig({
  vite: {
    server: {
      open: true,
      // https: true,
      proxy: {
        "/devApi": {
          target: "http://127.0.0.1:8085/",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/devApi/, ""),
        },
      },
    },
  },
  nitro: {
    devProxy: {
      "/proxy": {
        target: "http://127.0.0.1:8085/",
        changeOrigin: true,
        prependPath: true,
      }
    }
  }
})