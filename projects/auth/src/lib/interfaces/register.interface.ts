export interface RegisterReq {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    firstName: string,
    lastName: string,
    phone: string
}


export interface RegisterRes {
    email: string,
    username: string,
    firstName: string,
    lastName: string,
    phone: string,
    token: string,
}
