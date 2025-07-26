module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/auth', destination: '/pages/auth.js' },
      { source: '/logs', destination: '/pages/logs.js' }
    ];
  }
}
