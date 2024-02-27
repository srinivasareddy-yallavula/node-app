// const http=require('http');
// const fs=require('fs');
// const {readFile}=require('./fsModule.js');
// const server=http.createServer((req,res)=>{
//     if(req.url==='/read'){
//         const data=readFile('example.txt',(err,data));
//         res.writeHead(200, {'content-Type':'text/plain'});
//         res.end(data);
//     }else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//       }
// });
// server.listen(3000, () => {
//     console.log(`Server running at http://localhost:${3000}/`);
//   });



// http_module.js
// const http = require('http');
// const fs = require('fs');
// const { anotherFunction } = require('./fsModule.js');

// const server = http.createServer((req, res) => {
//   if (req.url === '/read') {
//     // Call another function to read a file
//     const data = anotherFunction();
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(data);
//   } 
// })

// .listen(3000, () => {
//     console.log(`Server running at http://localhost:${3000}/`);
// });

const http = require('http');
const fs = require('fs');
const { readFile } = require('./fsModule.js');

const server = http.createServer((req, res) => {
    if (req.url === '/read') {
        // Call the readFile function from fsModule.js
        readFile('./example.txt', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'content-Type': 'text/plain' });
            res.end(data);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log(`Server running at http://localhost:${3000}/`);
});
