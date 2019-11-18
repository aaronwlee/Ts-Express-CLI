import shell from 'shelljs'

function initializer(projectName: string) {
    shell.mkdir(`./${projectName}`)
    shell.exec(`./${projectName} npm init -y`)
}

export default initializer