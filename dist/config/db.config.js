"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
module.exports = {
    query: (text, params, callback) => {
        const pool = new pg_1.Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: 5432,
        });
        return pool.query(text, params, callback);
    },
    getClient: (callback) => {
        const pool = new pg_1.Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: 5432,
        });
        pool.connect((err, client, done) => {
            callback(err, client, done);
        });
    },
};
