import shell from 'shelljs'

function initializer(projectName: string) {
    shell.mkdir(`${process.cwd()}/${projectName}`)
    shell.exec(`${process.cwd()}/${projectName}/ npm init -y`)
}

export default initializer