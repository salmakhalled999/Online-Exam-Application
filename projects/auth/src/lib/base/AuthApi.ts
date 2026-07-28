import { Observable } from "rxjs";

export abstract class AuthAPI{
    abstract login(data:any):Observable<any>

    abstract register(data:any):Observable<any>

    // resgister step (send OTP)
    abstract verifyEmail(data:any):Observable<any>

    // forgot password step
    abstract verifyOtp(data:any):Observable<any>

    abstract resetPassword(data:any):Observable<any>
    
    abstract forgotPassword(data:any):Observable<any>
}