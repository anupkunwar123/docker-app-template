"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = __importDefault(require("react-dom/server"));
const react_1 = __importDefault(require("react"));
const App_1 = __importDefault(require("../client/src/App"));
const utils_1 = require("./utils");
const contact_1 = __importDefault(require("./model/contact"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/hello', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield contact_1.default.find({});
    res.json(result);
}));
app.get('/new', (req, res) => {
    res.send('new Api');
});
app.post('/login', (req, res) => {
    res.json(req.body);
});
app.get('/save', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let contact = new contact_1.default({ firstLine: 'Anup', secondLine: '`kunwar ' + new Date().getMilliseconds() });
    let result = yield contact.save();
    return res.json(result);
}));
app.get('*', (req, res) => {
    res.send(utils_1.getReactPage(server_1.default.renderToString(react_1.default.createElement(App_1.default, null))));
});
exports.default = app;
//# sourceMappingURL=app.js.map