export interface ForgotPasswordReq {
    email: string,
    redirectUrl: string,

}

export interface ForgotPasswordRes {
    message: string;
    resetToken: string;
}
