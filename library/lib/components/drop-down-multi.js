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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropDownMulti = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var label_1 = require("./label");
var labeled_input_1 = require("./labeled-input");
var react_select_1 = __importDefault(require("react-select"));
var DropDownMulti = function (props) {
    var _a;
    var selectStyle = {
        control: function (provided) {
            return __assign(__assign({}, provided), { fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Roboto\",\"Oxygen\", \"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\", sans-serif;", color: 'white', border: '1px solid transparent', borderRadius: '1px', outline: 'none', boxShadow: '0 0.0625rem 0.125rem rgba(0, 0, 0, 0.15)', minWidth: props.width });
        },
        singleValue: function (provided) {
            return __assign(__assign({}, provided), { color: '#2d3748' });
        },
        option: function (provided, _a) {
            var isSelected = _a.isSelected, isFocused = _a.isFocused;
            return __assign(__assign({}, provided), { color: '#2d3748', fontSize: '12px', backgroundColor: isSelected
                    ? '#B8C4D8'
                    : isFocused
                        ? '#F2F7FF'
                        : 'white' });
        },
        placeholder: function (provided) { return (__assign(__assign({}, provided), { fontSize: '14px' })); },
    };
    return ((0, jsx_runtime_1.jsxs)(labeled_input_1.LabeledInput, { children: [props.title && !props.error && (0, jsx_runtime_1.jsxs)(label_1.Label, { children: [props.title, ":"] }, void 0), props.title && props.error && (0, jsx_runtime_1.jsxs)(label_1.LabelError, { children: [props.title, ":"] }, void 0), (0, jsx_runtime_1.jsx)(react_select_1.default, { styles: selectStyle, isMulti: true, value: (_a = props.value) === null || _a === void 0 ? void 0 : _a.map(function (v) { return ({ label: v, value: v }); }), onChange: function (n) {
                    var newVal = [];
                    n.forEach(function (v) { return v.value && newVal.push(v.value); });
                    props.onChange(newVal);
                }, options: props.options.map(function (o) { return ({ label: o, value: o }); }), isClearable: true, isLoading: props.loading, isDisabled: props.disabled, onBlur: function () { return props.onBlur && props.onBlur(); }, placeholder: props.hint }, void 0), props.title && (0, jsx_runtime_1.jsx)(label_1.LabelMessage, { children: props.error }, void 0)] }, void 0));
};
exports.DropDownMulti = DropDownMulti;
