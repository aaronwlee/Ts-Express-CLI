"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = __importDefault(require("shelljs"));
function initializer(projectName) {
    shelljs_1.default.mkdir(`${process.cwd()}/${projectName}`);
    shelljs_1.default.cd(`${projectName}`);
    shelljs_1.default.echo(packagejsString(projectName)).to(`./package.json`);
    if (shelljs_1.default.which('yarn')) {
        shelljs_1.default.exec("yarn");
    }
    else {
        shelljs_1.default.echo("yarn not found");
        shelljs_1.default.exec("npm i");
    }
}
const packagejsString = (projectName) => `{
  "name": "${projectName}",
  "version": "1.0.0",
  "description": "A starting point for Node.js express apps with TypeScript",
  "license": "MIT",
  "scripts": {
    "build": "tsc",
    "start": "tsc -w | nodemon dist/server.js"
  },
  "devDependencies": {
    "@types/inquirer": "^6.5.0",
    "@types/shelljs": "^0.8.6",
    "@types/node": "^12.12.8",
    "@types/express": "^4.17.2",
    "@types/mongoose": "^5.5.32",
    "@types/compression": "^0.0.36",
    "@types/helmet": "^0.0.43",
    "@types/dotenv": "^6.1.1",
    "@types/cors": "^2.8.5",
    "ts-node": "^8.5.0",
    "tsc": "^1.20150623.0",
    "typescript": "^3.7.2"
  },
  "dependencies": {
    "mongo-to-gql": "^2.0.2",
    "mongoose": "^5.7.11",
    "express": "^4.17.1",
    "cors": "^2.8.5",
    "dotenv": "^8.0.0",
    "compression": "^1.7.4",
    "helmet": "^3.20.0"
  }
}
`;
exports.default = initializer;
//# sourceMappingURL=initializer.js.map