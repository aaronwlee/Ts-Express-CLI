const FileTypes: any = {
    Service: "service",
    Mutation: "mutation",
    Model: "model",
    Controller: "controller"
}


export default function compare(type: string): string {
    return Object.keys(FileTypes).filter((ft: any) => {
        if (type.toLowerCase() == FileTypes[ft].substring(0, 2)) {
            return FileTypes[ft]
        }
        else if (type.toLowerCase() == FileTypes[ft]) {
            return FileTypes[ft]
        }
    })[0]

}
