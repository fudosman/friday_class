const http = require('http');
const httpProxy = require('http-proxy');

const routes = {
  '/api': 'http://localhost:3000',
  '/dashboard': 'http://localhost:4000',
  '/auth': 'http://localhost:5000',
};

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  if (req) {
    console.log("this server is a proxy server");
  }
  if (routes[path]) {
    proxy.web(req, res, { target: routes[path] });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found')
  }
});

server.listen(3000, () => {
  console.log('Reverse proxy server running on port 3000');
});