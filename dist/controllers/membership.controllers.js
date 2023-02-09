"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserById = exports.signUp = void 0;
const db = require('../config/db.config');
function signUp(req, res, next) {
    console.log('inside signup controller');
    try {
        const userRecord = req.body;
        const queryText = 'INSERT INTO users(first_name,last_name,email,birthday ) VALUES($1,$2,$3,$4) RETURNING *';
        const values = [
            userRecord.firstName,
            userRecord.lastName,
            userRecord.email,
            userRecord.birthday,
        ];
        db.query(queryText, values, (err, result) => {
            if (err) {
                return next(err);
            }
            res.send(result.rows[0]);
        });
    }
    catch (e) {
        e;
    }
}
exports.signUp = signUp;
function findUserById(req, res, next) {
    console.log('inside findUserById controller');
    try {
        const id = req.params.userId;
        const queryText = 'SELECT * FROM users WHERE user_id=$1';
        const values = [id];
        db.query(queryText, values, (err, result) => {
            if (err) {
                return next(err);
            }
            res.send(result.rows[0]);
        });
    }
    catch (e) {
        e;
    }
}
exports.findUserById = findUserById;
