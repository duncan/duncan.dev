module.exports = {
  future: {
    webpack5: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/posts/2020/10/working',
        destination: '/software/careers/how-do-i-work-best',
        permanent: true,
      },
    ]
  },
}
