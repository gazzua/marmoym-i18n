"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var i18n_1 = require("../i18n");
var ko = {};
var en = {};
var header = 'module.exports = ';
for (var key in i18n_1.default) {
    for (var def in i18n_1.default[key]) {
        if (def === '@ko') {
            ko[key] = i18n_1.default[key][def];
        }
        else if (def === '@en') {
            en[key] = i18n_1.default[key][def];
        }
    }
}
fs.writeFileSync('./i18n/ko.js', header + JSON.stringify(ko), 'utf-8');
fs.writeFileSync('./i18n/en.js', header + JSON.stringify(en), 'utf-8');
