const http = require('http');
const app = require('./server');

const server = http.createServer(app);

server.listen(8000);
