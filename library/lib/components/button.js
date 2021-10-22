"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighlightedButton = exports.Button = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: bold;\n  border: none;\n  color: white;\n  padding: 5px 15px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin-right: 10px;\n  margin-top: 18px;\n  height: 38px;\n  background-color: #4caf50;\n  cursor: pointer;\n  &:disabled {\n    color: #9fbda0;\n    cursor: default;\n  }\n"], ["\n  font-weight: bold;\n  border: none;\n  color: white;\n  padding: 5px 15px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin-right: 10px;\n  margin-top: 18px;\n  height: 38px;\n  background-color: #4caf50;\n  cursor: pointer;\n  &:disabled {\n    color: #9fbda0;\n    cursor: default;\n  }\n"])));
exports.HighlightedButton = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: bold;\n  border: none;\n  color: white;\n  padding: 5px 15px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin-right: 10px;\n  margin-top: 18px;\n  height: 38px;\n  background-color: darkblue;\n  cursor: pointer;\n  &:disabled {\n    color: #9fbda0;\n    cursor: default;\n  }\n"], ["\n  font-weight: bold;\n  border: none;\n  color: white;\n  padding: 5px 15px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin-right: 10px;\n  margin-top: 18px;\n  height: 38px;\n  background-color: darkblue;\n  cursor: pointer;\n  &:disabled {\n    color: #9fbda0;\n    cursor: default;\n  }\n"])));
var templateObject_1, templateObject_2;
