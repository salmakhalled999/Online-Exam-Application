import { OriginDataRes } from './interfaces/origin-data.interface';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthAPI } from './base/AuthApi';
import { HttpClient } from '@angular/common/http';
import AuthEndPoint from './dictionary/AuthEndPoint';
import { AuthAdaptorService } from './Adaptor/auth-adaptor.service';
import { RegisterReq, RegisterRes } from './interfaces/register.interface';
import { LoginReq } from './interfaces/login.interface';
import { OtpReq, OtpRes } from './interfaces/otp.interface';
import { VerifyMailReq, VerifyMailRes } from './interfaces/verify-mail.interface';
import { ResetPasswordReq, ResetPasswordRes } from './interfaces/reset-password.interface';
import { ForgotPasswordReq, ForgotPasswordRes } from './interfaces/forgot-password.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthAPI{
  private readonly httpClient = inject(HttpClient)
  private readonly authAdaptorService = inject(AuthAdaptorService)


login(data:LoginReq):Observable<RegisterRes>{
  return this.httpClient.post<OriginDataRes>(AuthEndPoint.LOGIN,data)
  .pipe(map((res) => this.authAdaptorService.adapt(res)), catchError((err) => of(err)))
}


register(data: RegisterReq): Observable<RegisterRes> {
  return this.httpClient.post<OriginDataRes>(AuthEndPoint.REGISTER,data)
  .pipe(map((res) => this.authAdaptorService.adapt(res)),catchError((err) => of(err)))
}


// resgister step (send OTP)
verifyEmail(data: OtpReq): Observable<OtpRes> {
  return this.httpClient.post<OtpRes>(AuthEndPoint.VERIFYEMAIL,data)
}


// forgot password step
verifyOtp(data: VerifyMailReq): Observable<VerifyMailRes> {
  return this.httpClient.post<VerifyMailRes>(AuthEndPoint.VERIFYOTP,data)
}


resetPassword(data: ResetPasswordReq): Observable<ResetPasswordRes> {
  return this.httpClient.post<ResetPasswordRes>(AuthEndPoint.RESTPASSWORD,data)
}


forgotPassword(data: ForgotPasswordReq): Observable<ForgotPasswordRes> {
  return this.httpClient.post<ForgotPasswordRes>(AuthEndPoint.FORGOTPASSWORD,data)
}

}
