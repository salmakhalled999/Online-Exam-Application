export interface VerifyMailReq {
    email: string,
    code: string,
}

export interface VerifyMailRes {
    message: string,
}
