"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
console.log(process.env.AUTH_SECRET);
exports.config = {
    authRequired: true,
    auth0Logout: true,
    secret: process.env.AUTH_SECRET,
    baseUrRL: process.env.AUTH_BASE_URL,
    cient: process.env.AUTH_CLIENT_ID,
    issuerBaseURL: process.env.AUTH_ISSUER_BASE_URL,
};
