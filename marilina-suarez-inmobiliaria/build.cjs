const fs = require('fs');
const path = require('path');

const source = __dirname;
const destination = path.join(source, 'dist');
const skip = new Set(['dist', 'outputs', 'work', '.git', 'node_modules']);

fs.rmSync(destination, { recursive: true, force: true });
fs.mkdirSync(destination, { recursive: true });

function copyDirectory(from, to) {
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    if (skip.has(entry.name)) continue;
    const fromPath = path.join(from, entry.name);
    const toPath = path.join(to, entry.name);
    if (entry.isDirectory()) {
      fs.mkdirSync(toPath, { recursive: true });
      copyDirectory(fromPath, toPath);
    } else {
      fs.copyFileSync(fromPath, toPath);
    }
  }
}

copyDirectory(source, destination);
console.log('Sitio estático generado en dist/.');
