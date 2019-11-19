"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_spinner_1 = require("cli-spinner");
const spinner = new cli_spinner_1.Spinner('installing.. %s');
spinner.setSpinnerString('|/-\\');
var spawn = require('child_process').spawn;
const waitCommand = (command, onSuccess) => {
    return new Promise((resolve, reject) => {
        var process = spawn(command, { shell: true });
        spinner.start();
        process.on('exit', () => {
            spinner.stop();
            onSuccess();
            resolve();
        });
    });
};
exports.default = waitCommand;
//# sourceMappingURL=spinner.js.map