const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end(`Błąd serwera: ${err.code}`);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(content, 'utf-8');
    }
  });
});

const PORT = process.env.PORT || 3001; // Użyj innego portu lokalnie, np. 3001
server.listen(PORT, () => {
  console.log(`Serwer frontendu nasłuchuje na porcie ${PORT}`);
});
