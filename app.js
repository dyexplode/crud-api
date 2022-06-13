import http from 'http';
import { requestHandler as routes } from './util/routes.js';

const server = http.createServer(routes);
server.listen(8080);