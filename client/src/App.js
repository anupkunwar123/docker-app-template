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
var react_1 = __importStar(require("react"));
var App = function (_a) {
    var _b = react_1.useState(''), userName = _b[0], setUserName = _b[1];
    var _c = react_1.useState(''), password = _c[0], setPassword = _c[1];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("form", { action: "/login", method: "post" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", null, "Username"),
                react_1.default.createElement("input", { name: "username", type: "text", value: userName, onChange: function (e) { setUserName(e.target.value); } })),
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", null, "Password"),
                react_1.default.createElement("input", { name: "password", type: "password", value: password, onChange: function (e) { setPassword(e.target.value); } })),
            react_1.default.createElement("div", null,
                react_1.default.createElement("input", { type: "submit", value: "Submit" })))));
};
exports.default = App;
