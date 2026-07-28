import { Component, inject } from '@angular/core';
import { StaticPanel } from "../../components/static-panel/static-panel";
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../../../../../../dist/auth/';
import { Router } from '@angular/router';


@Component({
  selector: 'app-password',
  imports: [StaticPanel, FormsModule, InputTextModule, IconFieldModule, InputIconModule, ButtonModule, PasswordModule, RouterLink],
  templateUrl: './password.html',
  styleUrl: './password.css',
})
export class Password {

  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)

  PasswordForm: FormGroup = new FormGroup({
    password: new FormControl(null,[Validators.required]),
    confirmPassword: new FormControl([Validators.required])
  })

  createAccount(){
    if(this.PasswordForm.valid){
      this.authService.register(this.PasswordForm.value).subscribe({
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
