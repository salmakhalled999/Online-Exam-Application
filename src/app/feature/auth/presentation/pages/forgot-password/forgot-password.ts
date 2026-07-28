import { Component, inject } from '@angular/core';
import { StaticPanel } from "../../components/static-panel/static-panel";
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../../../../../../dist/auth';

@Component({
  selector: 'app-forgot-password',
  imports: [StaticPanel, FormsModule, InputTextModule, ButtonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  
  ForgotPasswordForm : FormGroup = new FormGroup ({
    email : new FormControl(null,[Validators.required])
  })

  ForgotPassword(){
    if(this.ForgotPasswordForm.valid){
      this.authService.forgotPassword(this.ForgotPasswordForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(["/verify-otp"])
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

}
