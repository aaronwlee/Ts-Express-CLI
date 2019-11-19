#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const inquirer_1 = __importDefault(require("inquirer"));
const typeValidator_1 = __importDefault(require("../utils/typeValidator"));
const initializer_1 = __importDefault(require("../lib/initializer"));
const logger_1 = __importDefault(require("../utils/logger"));
const path_1 = __importDefault(require("path"));
commander_1.default.version('0.0.1');
commander_1.default
    .command('init')
    .arguments('<projectName>')
    .description('initialize project')
    .action((projectName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answer = yield inquirer_1.default.prompt({
            type: "list",
            name: "projectType",
            message: "Select state type",
            choices: ["Stateless", "Stateful"]
        });
        logger_1.default.info("project will be created at", `${path_1.default.join(process.cwd(), projectName)}`, `with ${answer.projectType} type`);
        initializer_1.default(projectName);
    }
    catch (err) {
        logger_1.default.error(err);
    }
}));
commander_1.default
    .command('g')
    .arguments('<type> [name]')
    .description('generate file based on file type')
    .action((type, name) => {
    const verifiedType = typeValidator_1.default(type);
    if (verifiedType) {
        logger_1.default.info("type = ", verifiedType, "name = ", name);
        logger_1.default.info("my path = ", __dirname, "your path = ", process.cwd());
    }
    else {
        logger_1.default.error("the type must be one of the controller, model, mutation and service");
    }
});
commander_1.default.parse(process.argv);
//# sourceMappingURL=index.js.map