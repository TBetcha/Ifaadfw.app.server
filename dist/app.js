"use strict";
/** @format */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_middleware_1 = __importDefault(require("./middleware/logger.middleware"));
const membership_routes_1 = __importDefault(require("./routes/membership.routes"));
const auth_config_1 = require("./config/auth.config");
const dotenv = __importStar(require("dotenv"));
const express_openid_connect_1 = require("express-openid-connect");
dotenv.config({ debug: true });
const app = (0, express_1.default)();
//body parser
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, express_openid_connect_1.auth)(auth_config_1.config));
app.use(membership_routes_1.default);
app.use(logger_middleware_1.default);
app.use('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged' : 'Not Authenticated');
    res.send('<h1>hello bruh<h1>');
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 🚀 Server started on port ${PORT} 🚀 🚀`));
