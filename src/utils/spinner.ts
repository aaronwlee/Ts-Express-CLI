import { Spinner } from 'cli-spinner'
import { spawn } from 'child_process'

const spinner = new Spinner({
    text: '%s  Processing...   ',
    stream: process.stderr,
    onTick: function (msg) {
        this.clearLine(this.stream);
        this.stream.write(msg);
    }
});
spinner.setSpinnerString(19);
spinner.setSpinnerDelay(200);

const waitCommand = (command: any, onSuccess: any) => {
    return new Promise((resolve, reject) => {
        var process = spawn(command, { shell: true });
        spinner.start();
        process.on('exit', () => {
            spinner.stop();
            console.log('\n')
            onSuccess();
            resolve();
        })
    })
}

export default waitCommand