import { Component, inject } from '@angular/core';
import { StaticPanel } from "../../components/static-panel/static-panel";
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { RouterLink} from "@angular/router";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './../../../../../../../dist/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  imports: [StaticPanel, InputTextModule, IconFieldModule,
    InputIconModule, PasswordModule, ButtonModule, RouterLink, ReactiveFormsModule, MessageModule, ToastModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,
})
export class Login { 
  private readonly authService = inject(AuthService)
  private readonly router= inject(Router)
  private readonly toastrService = inject (ToastrService)


  loginForm :FormGroup =new FormGroup ({
    username: new FormControl (null,[Validators.required , Validators.pattern(/^[a-zA-Z][a-zA-Z0-9_]*$/)]),
    password: new FormControl (null,[Validators.required , Validators.pattern( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)])
  })


  login(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          // save token in local storage
          localStorage.setItem('token' , res.token)
          //toster success msg
          this.toastrService.success('login successfully', 'Online Exam')
          // navigate to 
          this.router.navigate(['/diplomas'])
        },
        error: (err) => {
          console.log(err);
          // toster error message
          this.toastrService.error('Something went wrong', 'Online Exam')
          // this.router.navigate(['/login'])
        }
      });
    }
  }
}
