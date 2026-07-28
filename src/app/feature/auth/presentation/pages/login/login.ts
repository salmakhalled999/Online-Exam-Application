import { Component, inject } from '@angular/core';
import { StaticPanel } from "../../components/static-panel/static-panel";
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RouterLink} from "@angular/router";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './../../../../../../../dist/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [StaticPanel, InputTextModule, IconFieldModule,
  InputIconModule, PasswordModule, ButtonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,
})
export class Login { 
  private readonly authService = inject(AuthService)
  private readonly router= inject(Router)


  loginForm :FormGroup =new FormGroup ({
    username: new FormControl (null,[Validators.required]),
    password: new FormControl (null,[Validators.required])
  })

  login(){
    console.log("login successfully")
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          
        },
        error: (err) => {
          console.log(err);
          this.router.navigate(["/login-error"])
        }
      });
    }
  }
}
