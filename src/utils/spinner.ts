import { Spinner } from 'cli-spinner'
import { spawn } from 'child_process'
import emoji from 'node-emoji';

const spinner = new Spinner({
    text: `%s  Processing...${emoji.get('rocket')}   `,
    stream: process.stderr,
    onTick: function (msg) {
        this.clearLine(this.stream);
        this.stream.write(msg);
    }
});
spinner.setSpinnerString(19);
spinner.setSpinnerDelay(500);

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