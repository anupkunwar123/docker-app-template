"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = process.env.PORT || 3030;
const app_config_1 = require("./app-config");
mongoose_1.default.connect(app_config_1.DB_URL, { useNewUrlParser: true });
const db = mongoose_1.default.connection;
db.once('open', () => {
    app_1.default.listen(PORT, () => {
        console.log(`Listening at PORT: ${PORT}`);
    });
});
//# sourceMappingURL=index.js.map