import shell from 'shelljs'
import logger from '../utils/logger';
import waitCommand from '../utils/spinner'
import fs from 'fs';

async function initializer(projectName: string) {
  shell.mkdir(`${process.cwd()}/${projectName}`)
  shell.cd(`${projectName}`)
  fs.writeFileSync(`./package.json`, packagejsString(projectName))
  logger.info("packge.json has created")

  fs.writeFileSync(`./tsconfig.json`, tsconfigString)
  fs.writeFileSync(`./.eslintrc`, eslintrcString)
  logger.info("tsconfig.json has created")

  if (shell.which('yarn')) {
    logger.info("Install package started! with yarn")
    await waitCommand("yarn", () => logger.info("node modules installed! 👍"))
    shell.exec("yarn")
  }
  else {
    logger.warn("Yarn not found...")
    logger.info("Install package started! with npm")
    await waitCommand("npm install", () => logger.info("node modules installed! 👍"))
  }

  shell.exec("git init")
  shell.exec(`git add . | git commit -am "initialized by ts-express-cli"`)
  logger.info(`done! cd ./${projectName}`)
}

const packagejsString = (projectName: string) =>
  `{
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
`

const tsconfigString =
  `{
  "compilerOptions": {
      "module": "commonjs",
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "declaration": true,
      "target": "es6",
      "noImplicitAny": true,
      "moduleResolution": "node",
      "sourceMap": true,
      "outDir": "dist",
      "baseUrl": ".",
      "paths": {
          "*": [
              "node_modules/*"
          ]
      }
  },
  "include": [
      "src/**/*"
  ]
}
`

const eslintrcString =
  `{
  "parser": "@typescript-eslint/parser",
  "extends": ["plugin:@typescript-eslint/recommended"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off"
  }
}
`

export default initializer