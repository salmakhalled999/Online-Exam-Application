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
import { ToastrService } from 'ngx-toastr';
import { MessageModule } from 'primeng/message';


@Component({
  selector: 'app-password',
  imports: [StaticPanel, FormsModule, InputTextModule, IconFieldModule, InputIconModule, ButtonModule, PasswordModule, ReactiveFormsModule, MessageModule],
  templateUrl: './password.html',
  styleUrl: './password.css',
})
export class Password {

  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  private readonly toastrService = inject(ToastrService)

  constructor(
    private registerDataService: RegisterDataService
  ) { }

  PasswordForm: FormGroup = new FormGroup({
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required])
  }, {validators:this.confirmPassword})

  createAccount() {
    if (this.PasswordForm.valid) {
      const body = {
        ...this.registerDataService.registerData,
        ...this.PasswordForm.value
      }
      this.authService.register(body).subscribe({
        next: (res) => {
          console.log(res);
          //toster success msg
          this.toastrService.success('Account Created', 'Online Exam')
          // navigate to login
          this.router.navigate(["/login"])
        },
        error: (err) => {
          console.log(err);
          // toster error message
          this.toastrService.error('Something went wrong', 'Online Exams')
          // navigate to email
          this.router.navigate(['/email'])
        }
      });
    }
  }



  //make a function (Parameter:data type)
  confirmPassword(group: any) {
    //1- emsek password value
    let PasswordValue = group.get('password').value

    //2- emsek confirm password value
    let confirmPasswordValue = group.get('confirmPassword').value

    //3-condition
    if (PasswordValue == confirmPasswordValue) {
      return null;
    }
    else {
      return { mismatch: true }
    }
  }
}
