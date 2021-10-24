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
exports.Title = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var react_router_dom_1 = require("react-router-dom");
var TitleBar = styled_components_1.default.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: #1a202c;\n  padding: 0.75rem 1.5rem;\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: #1a202c;\n  padding: 0.75rem 1.5rem;\n"])));
var LangButtons = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: right;\n"], ["\n  display: flex;\n  align-items: right;\n"])));
var LangButton = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: none !important;\n  border: none;\n  padding: 5 !important;\n  cursor: pointer;\n  color: white;\n"], ["\n  background: none !important;\n  border: none;\n  padding: 5 !important;\n  cursor: pointer;\n  color: white;\n"])));
var AtosLogo = styled_components_1.default.img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-right: 1rem;\n  width: 3rem;\n"], ["\n  margin-right: 1rem;\n  width: 3rem;\n"])));
var HeaderLink = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n"])));
var H1 = styled_components_1.default.h1(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 1.2rem;\n  font-weight: 200;\n  margin: 0;\n  text-transform: uppercase;\n"], ["\n  font-size: 1.2rem;\n  font-weight: 200;\n  margin: 0;\n  text-transform: uppercase;\n"])));
var H1Test = styled_components_1.default.h1(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-size: 1.2rem;\n  font-weight: 400;\n  margin: 0;\n  text-transform: uppercase;\n  color: red;\n"], ["\n  font-size: 1.2rem;\n  font-weight: 400;\n  margin: 0;\n  text-transform: uppercase;\n  color: red;\n"])));
var UserName = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: right;\n  margin-right: 1rem;\n  color: white;\n"], ["\n  display: flex;\n  align-items: right;\n  margin-right: 1rem;\n  color: white;\n"])));
var host = window.location.protocol + '//' + window.location.hostname;
var Title = function (props) {
    var history = (0, react_router_dom_1.useHistory)();
    var handleClick = function (path) {
        history.push(path);
    };
    return ((0, jsx_runtime_1.jsxs)(TitleBar, __assign({ "aria-label": "top-bar" }, { children: [(0, jsx_runtime_1.jsxs)(HeaderLink, __assign({ onClick: function () { return handleClick('/'); } }, { children: [(0, jsx_runtime_1.jsx)(AtosLogo, { src: "/atos-logo.png" }, void 0), host === props.prodUrl ? ((0, jsx_runtime_1.jsx)(H1, { children: props.title }, void 0)) : ((0, jsx_runtime_1.jsxs)(H1Test, { children: [props.title, " - NON-PROD"] }, void 0))] }), void 0), (0, jsx_runtime_1.jsxs)(LangButtons, { children: [(0, jsx_runtime_1.jsx)(UserName, { children: props.user }, void 0), props.lang &&
                        props.langs &&
                        props.setLang &&
                        props.langs.map(function (lang) {
                            return ((0, jsx_runtime_1.jsx)(LangButton, __assign({ name: lang, onClick: function () {
                                    props.setLang && props.setLang(lang);
                                } }, { children: props.lang === lang ? ((0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)("strong", { children: (0, jsx_runtime_1.jsx)("em", { children: lang.toUpperCase() }, void 0) }, void 0) }, void 0)) : ((0, jsx_runtime_1.jsx)("span", { children: lang.toUpperCase() }, void 0)) }), 'language-' + lang));
                        })] }, void 0)] }), void 0));
};
exports.Title = Title;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
