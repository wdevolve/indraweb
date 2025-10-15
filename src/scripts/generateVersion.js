// scripts/generateVersion.js
const fs = require('fs');
const path = require('path');

const version = Date.now(); // or use new Date().toISOString()

const fileContent = `// Auto-generated version file
const ASSET_VERSION = "${version}";
export default ASSET_VERSION;
`;

const filePath = path.join(__dirname, '../version.js');
fs.writeFileSync(filePath, fileContent, 'utf8');
console.log(`✅ Asset version updated to ${version}`);
