"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const loggerMiddleware = (req, res, next) => {
    console.log(`${req.protocol} :// ${req.get('host')} ${req.originalUrl}: ${(0, dayjs_1.default)().format()}`);
    next();
};
exports.default = loggerMiddleware;
