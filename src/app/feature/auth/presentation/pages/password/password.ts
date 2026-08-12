import { Component, inject } from '@angular/core';
import { StaticPanel } from "../../components/static-panel/static-panel";
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../../../../../../dist/auth/';
import { Router } from '@angular/router';
import { RegisterDataService } from '../../services/register-data.service';


@Component({
  selector: 'app-password',
  imports: [StaticPanel, FormsModule, InputTextModule, IconFieldModule, InputIconModule, ButtonModule, PasswordModule, ReactiveFormsModule],
  templateUrl: './password.html',
  styleUrl: './password.css',
})
export class Password {

  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)

  constructor(
    private registerDataService : RegisterDataService
  ){}

  PasswordForm: FormGroup = new FormGroup({
    password: new FormControl(null,[Validators.required]),
    confirmPassword: new FormControl([Validators.required])
  })



  createAccount(){
    const body ={
      ...this.registerDataService.registerData,
      ...this.PasswordForm.value
    }
    if(this.PasswordForm.valid){
      this.authService.register(body).subscribe({
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
