const fs = require('fs');
const path = require('path');
const os = require('os');

const folderPath = path.join(__dirname, 'test-folder');
const filePath = path.join(folderPath, 'info.txt');
const newFilePath = path.join(folderPath, 'system-info.txt');



if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log(`Folder created: ${folderPath}`);
}
const osInfo = `OS: ${os.type()}
Architecture: ${os.arch()}
Home Directory: ${os.homedir()}
`;

fs.writeFileSync(filePath, osInfo);
console.log(`File created: ${filePath}`);

const data = fs.readFileSync(filePath, 'utf8');
console.log('File Content:\n', data);

fs.renameSync(filePath, newFilePath);
console.log(`File renamed to: ${newFilePath}`);

setTimeout(() => {
    fs.unlinkSync(newFilePath);
    console.log(`File deleted: ${newFilePath}`);
}, 5000);

setInterval(() => {
    console.log('Monitoring system...');
}, 10000);
