"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var label_1 = require("./label");
var labeled_input_1 = require("./labeled-input");
ReactSelect;
from;
"react-select";
var Select = function (props) {
    return ((0, jsx_runtime_1.jsxs)(labeled_input_1.LabeledInput, { children: [(0, jsx_runtime_1.jsxs)(label_1.Label, { children: [props.title, ":"] }, void 0), (0, jsx_runtime_1.jsx)(ReactSelect, { options: props.options.map(function (o) {
                    return { value: o, label: o };
                }) }, void 0), (0, jsx_runtime_1.jsx)("select", __assign({ "data-testid": props.name, id: props.name, name: props.name, value: props.value ? props.value : "", onChange: function (e) {
                    return props.setValue(e.target.value);
                }, style: { width: props.width } }, { children: props.options.map(function (o) { return ((0, jsx_runtime_1.jsx)("option", __assign({ value: "{o}" }, { children: o }), void 0)); }) }), void 0)] }, void 0));
};
exports.Select = Select;
