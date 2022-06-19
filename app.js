import http from 'http';
import { requestHandler as routes } from './src/routes.js';
import dotenv from 'dotenv';

dotenv.config();
const server = http.createServer(routes);
server.listen(process.env.CRUD_PORT);
