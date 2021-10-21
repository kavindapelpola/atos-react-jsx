"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputArea = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var label_1 = require("./label");
var labeled_input_1 = require("./labeled-input");
var styled_components_1 = __importDefault(require("styled-components"));
var StyledInput = styled_components_1.default.textarea(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: table-cell;\n  padding: 0 10px;\n  width: ", "px;\n  background: #fff;\n  border: 1px solid transparent;\n  box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.15);\n  border-radius: 1px;\n  outline: none;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  font-size: 14px;\n  text-align: left;\n  text-overflow: ellipsis;\n  line-height: 26px;\n  -webkit-appearance: none;\n"], ["\n  display: table-cell;\n  padding: 0 10px;\n  width: ", "px;\n  background: #fff;\n  border: 1px solid transparent;\n  box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.15);\n  border-radius: 1px;\n  outline: none;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  font-size: 14px;\n  text-align: left;\n  text-overflow: ellipsis;\n  line-height: 26px;\n  -webkit-appearance: none;\n"])), function (props) { return props.cols; });
var InputArea = function (props) {
    return ((0, jsx_runtime_1.jsxs)(labeled_input_1.LabeledInput, { children: [!props.error && (0, jsx_runtime_1.jsxs)(label_1.Label, { children: [props.title, ":"] }, void 0), props.error && (0, jsx_runtime_1.jsxs)(label_1.LabelError, { children: [props.title, ":"] }, void 0), (0, jsx_runtime_1.jsx)(StyledInput, { value: props.value, rows: props.rows, cols: props.width, onChange: function (e) { return props.setValue(e.target.value); } }, void 0), (0, jsx_runtime_1.jsx)(label_1.LabelMessage, { children: props.error }, void 0)] }, void 0));
};
exports.InputArea = InputArea;
var templateObject_1;