"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_middleware_1 = __importDefault(require("../middleware/logger.middleware"));
const membership_controllers_1 = require("../controllers/membership.controllers");
const router = express_1.default.Router();
router.get('/membership-form', (req, res, next) => {
    (0, logger_middleware_1.default)(req, res, next);
    console.log('membership');
    res.send('<h1>Downloading mmebership form<h1>');
});
router.post('/member', [logger_middleware_1.default], membership_controllers_1.signUp);
router.get('/member/:userId', [logger_middleware_1.default], membership_controllers_1.findUserById);
router.get('/members', [logger_middleware_1.default], membership_controllers_1.findAllUsers);
exports.default = router;
