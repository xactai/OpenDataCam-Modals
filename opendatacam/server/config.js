// server/config.js
const fs = require('fs');
const path = require('path');

function loadConfig(filePath) {
    const fullPath = path.resolve(filePath);
    if (!fs.existsSync(fullPath)) {
        console.error(`Config file not found: ${fullPath}`);
        process.exit(1);
    }
    return JSON.parse(fs.readFileSync(fullPath));
}

function loadAllConfigs(configDir = path.join(__dirname, '../configs')) {
    if (!fs.existsSync(configDir)) return [];
    const configFiles = fs.readdirSync(configDir).filter(f => f.endsWith('.json'));
    return configFiles.map(f => loadConfig(path.join(configDir, f)));
}

module.exports = {
    loadConfig,
    loadAllConfigs
};
