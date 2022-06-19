import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import Group from './classes/Group.js';

const userGroup = new Group();


const requestHandler = (req, res) => {
    console.log(req.method, req.url);
    req.on('data', (chunk) => {
        console.log(chunk.toString());
    })
    const dir = path.dirname(req.url).toLowerCase();
    const doc = path.basename(req.url);
    //console.log('dir -->', dir, '\ndoc -->', doc);
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
                console.log('doc -->', doc);
                if (doc === 'users') {
                    res.write(JSON.stringify(userGroup.getAll()));
                    res.end();
                } else {
                    res.write(JSON.stringify(userGroup.getFromId(doc)));
                    res.end();
                }
                break;
            case 'POST':
                let queryContent = '';
                req.on('data', (chunk) => {
                    if (chunk) queryContent +=chunk;
                });
                req.on('end', () => {
                    console.log('end -->', queryContent);
                    const data = JSON.parse(queryContent);
                    console.log('data -->', data)
                    res.write(JSON.stringify(userGroup.add(data.userName, data.age, data.hobbies)));
                    res.end();
                })
                break;
            case 'DELETE':
                console.log(doc)
                userGroup.removeById(doc);
                res.statusCode = 204;
                res.end();
                break;
            case 'PUT':
                let queryContentUpdate = '';
                req.on('data', (chunk) => {
                    console.log(chunk);
                    if (chunk) queryContentUpdate += chunk;
                })
                req.on('end', () => {
                    const data = JSON.parse(queryContentUpdate);
                    res.write(JSON.stringify(userGroup.updateById(doc, data.userName, data.age, data.hobbies)));
                    res.end();
                })
                break;
            }
            break;
        
    }


}

export { requestHandler };