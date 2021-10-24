"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledInfo = exports.LabelMessage = exports.LabelError = exports.Label = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Label = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  font-weight: bold;\n  font-size: 12px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  font-weight: bold;\n  font-size: 12px;\n"])));
exports.LabelError = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  font-weight: bold;\n  font-size: 12px;\n  color: red;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  font-weight: bold;\n  font-size: 12px;\n  color: red;\n"])));
exports.LabelMessage = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  font-size: 12px;\n  color: red;\n"], ["\n  display: inline-block;\n  font-size: 12px;\n  color: red;\n"])));
exports.StyledInfo = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: right;\n"], ["\n  display: flex;\n  justify-content: right;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
