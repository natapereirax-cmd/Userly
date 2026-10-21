const { DatabaseSync } = require('node:sqlite');
require('dotenv').config();

const db = new DatabaseSync( process.env.DB_PATH || 'userly.db' );

db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            firstname TEXT NOT NULL,
            lastname TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE COLLATE NOCASE
        )
    `);

module.exports = db;