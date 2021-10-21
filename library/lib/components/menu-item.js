"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = __importDefault(require("styled-components"));
var MenuItemButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: #ffff;\n  font-size: 16px;\n  text-decoration: none;\n  margin-right: 1.5rem;\n  background: none !important;\n  border: none;\n  padding: 0 !important;\n  cursor: pointer;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: #ffff;\n  font-size: 16px;\n  text-decoration: none;\n  margin-right: 1.5rem;\n  background: none !important;\n  border: none;\n  padding: 0 !important;\n  cursor: pointer;\n"])));
var MenuItem = function (props) {
    var history = (0, react_router_dom_1.useHistory)();
    var handleClick = function (path) {
        history.push(path);
    };
    return ((0, jsx_runtime_1.jsx)(MenuItemButton, __assign({ onClick: function () { return handleClick(props.path); } }, { children: props.title }), void 0));
};
exports.MenuItem = MenuItem;
var templateObject_1;
