import shell from 'shelljs'

function initializer(projectName: string) {
    shell.mkdir(`${process.cwd()}/${projectName}`)
    shell.cd(`${projectName}`)
    shell.exec('npm init -y')
}

export default initializer