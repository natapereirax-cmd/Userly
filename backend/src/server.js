const https = require('node:https');
const fs = require('node:fs');
const path = require('node:path');

const app = require('./app');

const options = {
    key: fs.readFileSync(
        path.join(__dirname, '../certs/localhost-key.pem')
    ),
    cert: fs.readFileSync(
        path.join(__dirname, '../certs/localhost-cert.pem')
    )
};

const PORT = process.env.PORT || 3000;

https.createServer(options, app).listen(PORT, () => {
    console.log(`HTTPS server running on port: ${PORT}`);
});