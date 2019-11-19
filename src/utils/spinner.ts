import { Spinner } from 'cli-spinner'

const spinner = new Spinner('installing.. %s');
spinner.setSpinnerString('|/-\\');
var spawn = require('child_process').spawn;

const waitCommand = (command: any, onSuccess: any) => {
    return new Promise((resolve, reject) => {
        var process = spawn(command, { shell: true });
        spinner.start();
        process.on('exit', () => {
            spinner.stop();
            onSuccess();
            resolve();
        })
    })
}

export default waitCommand