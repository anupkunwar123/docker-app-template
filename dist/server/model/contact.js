"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const contact = new mongoose_1.default.Schema({
    firstLine: String,
    secondLine: String
});
exports.default = mongoose_1.default.model('Contact', contact);
//# sourceMappingURL=contact.js.map