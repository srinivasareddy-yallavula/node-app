const path = require('path');

const filePath = '/users/kmss/js_programs/pathModule.txt';


const dirname = path.dirname(filePath);
console.log('Directory:', dirname);


const basename = path.basename(filePath);
console.log('File Name:', basename);


const fullPath = path.join(__dirname, 'files', 'pathModule.txt');
console.log('Full Path:', fullPath);