const { createProxyMiddleware } = require('http-proxy-middleware');

// 城市选择跨域
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://bang.360.cn',
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};