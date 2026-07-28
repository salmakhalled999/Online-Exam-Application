const baseurl = "https://exam-app.elevate-bootcamp.cloud/api/auth" as const
export default class AuthEndPoint{
    static readonly LOGIN = `${baseurl}/login`
    static readonly REGISTER = `${baseurl}/register`
    // resgister step (send OTP)
    static readonly VERIFYEMAIL = `${baseurl}/send-email-verification`
    // forgot password step
    static readonly VERIFYOTP = `${baseurl}/confirm-email-verification`
    static readonly RESTPASSWORD = `${baseurl}/reset-password`
    static readonly FORGOTPASSWORD = `${baseurl}/forgot-password`
   
    
}