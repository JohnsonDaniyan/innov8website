const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/data/v1/action/find', createProxyMiddleware({ target: 'https://data.mongodb-api.com', changeOrigin: true }));
app.listen(3000);
