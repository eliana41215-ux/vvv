const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const types = { '.css': 'text/css', '.js': 'application/javascript', '.html': 'text/html', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.mp4': 'video/mp4', '.json': 'application/json' };

http.createServer((request, response) => {
  const requested = request.url === '/' ? '/index.html' : decodeURIComponent(request.url.split('?')[0]);
  const file = path.resolve(root, `.${requested}`);
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    response.writeHead(404); response.end('Not found'); return;
  }
  response.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(response);
}).listen(port, () => console.log(`Sitio disponible en http://localhost:${port}`));
