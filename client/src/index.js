"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_dom_1 = __importDefault(require("react-dom"));
var react_1 = __importDefault(require("react"));
var App_1 = __importDefault(require("./App"));
react_dom_1.default.hydrate(react_1.default.createElement(App_1.default, null), document.getElementById("app"));
