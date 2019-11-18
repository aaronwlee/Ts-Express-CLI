"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = __importDefault(require("shelljs"));
function initializer(projectName) {
    shelljs_1.default.mkdir(`${process.cwd()}/${projectName}`);
    shelljs_1.default.exec(`${process.cwd()}/${projectName}/ npm init -y`);
}
exports.default = initializer;
//# sourceMappingURL=initializer.js.map