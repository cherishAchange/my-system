const path = require('path');
const http = require('http');
const fs = require('fs');
const process = require('process');
const port = 8989;

var server = http.createServer(function(req, res){
  fs.readFile(`${path.resolve('./')}/dist/${req.url === '/' ? 'index.html' : req.url.split('?')[0]}`, {encoding:"utf-8"},
    function (err, data) {
      if (err) {
        res.writeHead(200);
        return res.end('Error loading index.html');
      }
      res.writeHead(200);
      res.end(data);
    }
  );
});
server.listen(port);

console.log(`服务启动在${port}端口`);