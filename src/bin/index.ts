#!/usr/bin/env node

import program from 'commander'
import chalk from 'chalk';
import inquirer from 'inquirer'
import compare from '../utils/typeValidator'
import initializer from '../lib/initializer';

const info = chalk.cyan
const warn = chalk.red
const error = chalk.bgRed
const log = console.log

program.version('0.0.1')

program
    .command('init')
    .arguments('<projectName>')
    .description('initialize project')
    .action(async (projectName) => {
        try {
            const answer = await inquirer.prompt({
                type: "list",
                name: "projectType",
                message: "Select state type",
                choices: ["Stateless", "Stateful"]
            })

            log(info("project will be created at"), warn(`${process.cwd()}/${projectName}`), info(`with ${answer.projectType} type`))
            initializer(projectName);
        } catch (err) {
            log(error("error!", err))
        }
    });

program
    .command('g')
    .arguments('<type> [name]')
    .description('generate file based on file type')
    .action((type, name) => {
        const verifiedType = compare(type);
        if (verifiedType) {
            log(info("type ="), warn(verifiedType), info("name ="), warn(name));
            log(info("my path ="), __dirname, info("your path ="), process.cwd())
        } else {
            log(error("the type must be one of the controller, model, mutation and service"))
        }
    });

program.parse(process.argv);