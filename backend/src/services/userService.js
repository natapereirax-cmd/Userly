const db = require('../config/database');

function getAllUsers () {
    return db.prepare('SELECT * FROM users').all();
}

function createUser (firstname, lastname, email) {

    return db.prepare(`INSERT INTO users (firstname, lastname, email) VALUES (?, ?, ?)`).run(firstname, lastname, email);
}

function deleteUser (id) {
    return db.prepare(`DELETE FROM users WHERE id = ?`).run(id);
}

module.exports = {
    getAllUsers,
    createUser,
    deleteUser
};