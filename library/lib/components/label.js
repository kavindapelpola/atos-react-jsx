"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelMessage = exports.LabelError = exports.Label = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Label = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  font-weight: bold;\n"], ["\n  display: inline-block;\n  font-weight: bold;\n"])));
exports.LabelError = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  font-weight: bold;\n  color: red;\n"], ["\n  display: inline-block;\n  font-weight: bold;\n  color: red;\n"])));
exports.LabelMessage = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  color: red;\n"], ["\n  display: inline-block;\n  color: red;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
