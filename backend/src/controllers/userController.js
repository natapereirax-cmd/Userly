const { error } = require('node:console');
const userService = require('../services/userService');

function getAllUsers (req, res, next) {
    try {
        const users = userService.getAllUsers();
    
        return res.json (users);
    } catch (err) {
        next(err);
    }
}

function createUser (req, res, next) {
    const firstname = typeof req.body.firstname === 'string' ? req.body.firstname.trim() : '';
    const lastname = typeof req.body.lastname === 'string' ? req.body.lastname.trim() : '';
    const email = typeof req.body.email === 'string' ? req.body.email.trim() : '';

    if (
        !firstname ||
        !lastname ||
        !email ||
        firstname.length > 100 ||
        lastname.length > 100 ||
        email.length > 254 ||
        !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
    ) {
        return res.status(400).json({
            error: 'Invalid credentials'
        });
    }

    try {
        userService.createUser(firstname, lastname, email);
        return res.status(201).json({ ok: true });
    } catch (err) {
        if (
            err.code === 'ERR_SQLITE_ERROR' &&
            err.message.includes('UNIQUE constraint failed')
        ) {
            return res.status(409).json({
                error: 'Email already registered.'
            });
        }
        next(err);
    }
}

function deleteUser (req, res, next) {
    const id = Number(req.body.id);

    if(!Number.isInteger(id)) {
        return res.status(400).json({ error: "Invalid id" });
    }

    try {
        const info = userService.deleteUser(id);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getAllUsers,
    createUser,
    deleteUser
}