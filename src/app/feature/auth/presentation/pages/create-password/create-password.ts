import { Component, inject } from '@angular/core';
import { StaticPanel } from "../../components/static-panel/static-panel";
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../../../../dist/auth';

@Component({
  selector: 'app-create-password',
  imports: [StaticPanel, FormsModule, InputTextModule, IconFieldModule, InputIconModule, ButtonModule, PasswordModule, RouterLink, ReactiveFormsModule],
  templateUrl: './create-password.html',
  styleUrl: './create-password.css',
})
export class CreatePassword {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)

  resetPasswordForm : FormGroup = new FormGroup({
    newPassword: new FormControl (null,[Validators.required]),
    confirmPassword: new FormControl (null , [Validators.required]),
  })

  resetPassword(){
    if(this.resetPasswordForm.valid){
      this.authService.resetPassword(this.resetPasswordForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(["/login"])
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}
