"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const App = ({}) => {
    let [userName, setUserName] = react_1.useState('');
    let [password, setPassword] = react_1.useState('');
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Login form"),
        react_1.default.createElement("form", { action: "/login", method: "post" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", null, "Username"),
                react_1.default.createElement("input", { name: "username", type: "text", value: userName, onChange: (e) => { setUserName(e.target.value); } })),
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", null, "Password"),
                react_1.default.createElement("input", { name: "password", type: "password", value: password, onChange: (e) => { setPassword(e.target.value); } })),
            react_1.default.createElement("div", null,
                react_1.default.createElement("input", { type: "submit", value: "Submit" })))));
};
exports.default = App;
//# sourceMappingURL=App.js.map