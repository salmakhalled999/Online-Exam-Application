import { Email } from './../email/email';
import { Component, inject, OnInit } from '@angular/core';
import { StaticPanel } from "../../components/static-panel/static-panel";
import { InputOtpModule } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';
import { Router} from "@angular/router";
import { AuthService } from './../../../../../../../dist/auth';
import { RegisterDataService } from '../../services/register-data.service';

@Component({
  standalone: true,
  selector: 'app-verify-email',
  imports: [StaticPanel, InputOtpModule, FormsModule],
  templateUrl: './verify-email.html',
  styleUrl: './verify-email.css',
})
export class VerifyEmail{
  otp: string = ''

  private readonly authService = inject(AuthService);
  private readonly registerDataService = inject(RegisterDataService)
  private readonly router = inject (Router)

  
  emailVrification() {
    if (this.otp.length != 6) {
      // if condition is true it doesn't send data to request
      return;
    }

    // receive email from registerDataService
    const email = this.registerDataService.registerData.email;

    // prepare data to send api
    const body = {
      email: email,
      code: this.otp
    }

    this.authService.verifyOtp(body).subscribe({
      next: (res) => {
        console.log(res)
        this.router.navigate(['/user-info']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
