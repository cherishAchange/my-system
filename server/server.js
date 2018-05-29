const path = require('path');
const http = require('http');
const fs = require('fs');
const process = require('process');
const port = 8989;
const log4js = require('log4js');

// 请求次数
let day_request_count = 0;
// 成功返回次数
let day_res_S_count = 0;
// 返回失败次数
let day_res_R_count = 0;

log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
  categories: { default: { appenders: ['cheese'], level: 'trace' } }
});

const logger = log4js.getLogger('cheese');

logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
var server = http.createServer(function(req, res){
  logger.info(`今天的第${++day_request_count}次请求`);
  const filepath = `${path.resolve('./')}/dist/${req.url === '/' ? 'index.html' : req.url.split('?')[0]}`;
  fs.readFile(filepath, {encoding:"utf-8"},
    function (err, data) {
      if (err) {
        logger.info(`今天成功返回的第${++day_res_R_count}个请求`);
        res.writeHead(200);
        return res.end('Error loading index.html');
      }
      logger.info(`今天成功返回的第${++day_res_S_count}个请求`);
      res.writeHead(200);
      res.end(data);
    }
  );
});
server.listen(port);

console.log(`服务启动在${port}端口`);