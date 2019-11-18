#!/usr/bin/env node

import program from 'commander'
import inquirer from 'inquirer'
import compare from '../utils/typeValidator'
import initializer from '../lib/initializer';
import logger from '../utils/logger';

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

            logger.info("project will be created at", `${process.cwd()}/${projectName}`, `with ${answer.projectType} type`)
            initializer(projectName);
        } catch (err) {
            logger.error(err)
        }
    });

program
    .command('g')
    .arguments('<type> [name]')
    .description('generate file based on file type')
    .action((type, name) => {
        const verifiedType = compare(type);
        if (verifiedType) {
            logger.info("type = ", verifiedType, "name = ", name)
            logger.info("my path = ", __dirname, "your path = ", process.cwd())
        } else {
            logger.error("the type must be one of the controller, model, mutation and service")
        }
    });

program.parse(process.argv);