"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckBox = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var label_1 = require("./label");
var labeled_input_1 = require("./labeled-input");
var im_1 = require("react-icons/im");
var styled_components_1 = __importDefault(require("styled-components"));
var StyledInput = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 12px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 12px;\n"])));
var CheckBox = function (props) {
    return ((0, jsx_runtime_1.jsxs)(labeled_input_1.LabeledInput, { children: [!props.error && (0, jsx_runtime_1.jsx)(label_1.Label, { children: props.title }, void 0), props.error && (0, jsx_runtime_1.jsx)(label_1.LabelError, { children: props.title }, void 0), (0, jsx_runtime_1.jsxs)(StyledInput, { children: [props.value && ((0, jsx_runtime_1.jsx)(im_1.ImCheckboxChecked, { onClick: function () { return props.setValue(false); }, color: "rgba(0, 0, 0, 0.50)" }, void 0)), !props.value && ((0, jsx_runtime_1.jsx)(im_1.ImCheckboxUnchecked, { onClick: function () { return props.setValue(true); }, color: "rgba(0, 0, 0, 0.15)" }, void 0))] }, void 0), (0, jsx_runtime_1.jsx)(label_1.LabelMessage, { children: props.error }, void 0)] }, void 0));
};
exports.CheckBox = CheckBox;
var templateObject_1;
