import { FormControl, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { StaticPanel } from "../../components/static-panel/static-panel";
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";
import { AuthService } from './../../../../../../../dist/auth';
import { Router } from '@angular/router';
import { RegisterDataService } from '../../services/register-data.service';


@Component({
  selector: 'app-email',
  imports: [StaticPanel, InputTextModule, ButtonModule, IconFieldModule, InputIconModule, RouterLink, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './email.html',
  styleUrl: './email.css',
})
export class Email {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)

  constructor(
    private registerDataService: RegisterDataService
  ) { }

  emailForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required])
  })

  email() {
    console.log("")
    if (this.emailForm.valid) {
      this.authService.verifyEmail(this.emailForm.value).subscribe({
        next: (res) => {
          console.log(res);
          // this.registerDataService.registerData = this.emailForm.value
          this.registerDataService.registerData = {
            ...this.registerDataService.registerData,
            ...this.emailForm.value
          };
          this.router.navigate(["/verify-email"])
        },
        error: (err) => {
          console.log(err);
        }
      });
    }

  }
}
