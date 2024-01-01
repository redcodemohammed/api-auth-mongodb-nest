"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = exports.hash = void 0;
const bcrypt_1 = require("bcrypt");
function hash(data) {
    return (0, bcrypt_1.hash)(data, 10);
}
exports.hash = hash;
function compare(originalData, hashed) {
    return (0, bcrypt_1.compare)(originalData, hashed);
}
exports.compare = compare;
//# sourceMappingURL=hash.js.map