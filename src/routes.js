import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const requestHandler = (req, res) => {
    // res.write('Hello');
    // return res.end();
    //console.log(res);
    // console.log(req);
    console.log(req.data);
    console.log(req.meta);
    console.log(req.requestHandler);
    console.log(req.dirname);
    console.log(req.rf);
    console.log(req.body);
    console.log(req.params);
    console.log(req.method, req.url);
    req.on('data')

    switch (req.method) {
        case 'GET':
            let pr = false;
            if (req.url === '/' || req.url === '/index.html') {
                pr = true;
                const rf = fs.createReadStream(path.join(path.dirname(fileURLToPath(import.meta.url)), '../www/index.html'), { encoding: 'utf-8' });
                rf.on('readable', () => {
                    const data = rf.read();
                    if (data) res.write(data);
                });
                rf.on('end', () => {
                    res.end();
                })
            } else {
               
            }

            if (req.url === '/index.js') {
                pr = true;
                res.contentType = 'text/javascript';
                res.statusCode = 200;
                const rf = fs.createReadStream(path.join(path.dirname(fileURLToPath(import.meta.url)), '../www/index.js'), { encoding: 'utf-8' });
                rf.on('readable', () => {
                    const data = rf.read();
                    if (data) res.write(data);
                });
                rf.on('end', () => {
                    res.end();
                })
            }

            if (req.url === '/style.css') {
                pr = true;
                res.contentType = 'text/css';
                res.statusCode = 200;
                const rf = fs.createReadStream(path.join(path.dirname(fileURLToPath(import.meta.url)), '../www/style.css'), { encoding: 'utf-8' });
                rf.on('readable', () => {
                    const data = rf.read();
                    if (data) res.write(data);
                });
                rf.on('end', () => {
                    res.end();
                })
            }

            if (!pr) {
                res.end();
            }
            break;

        case 'PUT':
            res.end();
            break;

        case 'POST':
            res.end();
            break;

        case 'DELETE':
            res.end();
            break;
    }


}

export { requestHandler };