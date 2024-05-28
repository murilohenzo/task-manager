export type TaskModel = {
    taskId: number | undefined,
    status: string,
    descricao: string,
    userId: number
}

export type UserModel = {
    id: number | undefined,
    username: string,
    password:string,
    email: string,
    firstname: string | undefined,
    lastname: string | undefined
}
