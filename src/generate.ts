import * as fs from 'fs';
import * as path from 'path';

import i18n from '../i18n';

var ko = {};
var en = {};
var header = 'module.exports = ';

// Make i18n obj
for (let key in i18n) {
  for (let def in i18n[key]) {
    if (def === '@ko') {
      ko[key] = i18n[key][def];
    } else if (def === '@en') {
      en[key] = i18n[key][def];
    }
  }
}

// Write to i18n js file
fs.writeFileSync('./i18n/ko.js', header + JSON.stringify(ko), 'utf-8'); 
fs.writeFileSync('./i18n/en.js', header + JSON.stringify(en), 'utf-8'); 
