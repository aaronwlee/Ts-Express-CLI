import { Spinner } from 'cli-spinner'
import { spawn } from 'child_process'

const spinner = new Spinner({
    text: 'Processing... %s\n',
    stream: process.stderr,
    onTick: function (msg) {
        this.clearLine(this.stream);
        this.stream.write(msg);
    }
});
spinner.setSpinnerString(17);
spinner.setSpinnerDelay(200);

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