import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import Group from './classes/Group.js';

const userGroup = new Group();


const requestHandler = (req, res) => {
    const dir = path.dirname(req.url).toLowerCase();
    const doc = path.basename(req.url);
    switch (dir) {
        case '/':
        case '/test':
            if (doc === '' || doc === 'test' || doc === 'index.html') {
                
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
            if (doc === 'index.js') {
               
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
            if (doc === 'style.css') {
               
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
        break;
        
        //Work with API
        case '/api/users':
        case '/api':
            switch(req.method) {
            case 'GET':
                if (doc === 'users') {
                    let [status, msg] = userGroup.getAll();
                    res.statusCode = status;
                    res.write(JSON.stringify(msg));
                    res.end();
                } else {
                    let [status, msg] = userGroup.getFromId(doc);
                    res.statusCode = status;
                    res.write(JSON.stringify(msg));
                    res.end();
                }
                break;

            case 'POST':
                let queryContent = '';
                req.on('data', (chunk) => {
                    if (chunk) queryContent +=chunk;
                });
                req.on('end', () => {
                    try {
                        const data = JSON.parse(queryContent);
                        let [status, msg] = userGroup.add(data.userName, data.age, data.hobbies);
                        res.statusCode = status;
                        res.write(JSON.stringify(msg));
                        res.end();
                    } catch {
                        res.statusCode = 500;
                        res.write(JSON.stringify({
                            "message": "Server error. Type of dann is broke."}));
                        res.end();
                    }
                })
                break;

            case 'DELETE':
                let [status, msg] = userGroup.removeById(doc);
                res.statusCode = status;
                if (status !== 204) res.write(JSON.stringify(msg));
                res.end();
                break;

            case 'PUT':
                let queryContentUpdate = '';
                req.on('data', (chunk) => {
                    if (chunk) queryContentUpdate += chunk;
                })
                req.on('end', () => {
                    try {
                        const data = JSON.parse(queryContentUpdate);
                        let [status, msg] = userGroup.updateById(doc, data.userName, data.age, data.hobbies);
                        res.statusCode = status;
                        res.write(JSON.stringify(msg));
                        res.end();
                    } catch{
                        res.statusCode = 500;
                        res.write(JSON.stringify({
                            "message": "Server error. Type of dann is broke."}));
                        res.end();
                    }
                })
                break;
            }
            break;
        
    }


}

export { requestHandler };