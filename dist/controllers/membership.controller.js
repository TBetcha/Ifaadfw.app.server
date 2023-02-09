"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
// import { NextFunction, Request, Response } from 'express';
const logger_middleware_1 = __importDefault(require("../middleware/logger.middleware"));
async function signUp(req, res, next) {
    (0, logger_middleware_1.default)(req, res, next);
}
exports.signUp = signUp;
