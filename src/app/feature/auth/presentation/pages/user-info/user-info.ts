import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { StaticPanel } from "../../components/static-panel/static-panel";
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../../../../../../dist/auth/';
import { Router } from '@angular/router';
import intlTelInput, * as intelTelInput from "intl-tel-input";
import { isPlatformBrowser } from '@angular/common';
import { RegisterDataService } from '../../services/register-data.service';

@Component({
  selector: 'app-user-info',
  imports: [StaticPanel, FormsModule, InputTextModule, InputGroupModule,
    InputGroupAddonModule, IconFieldModule, InputIconModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css',
})
export class UserInfo implements OnInit {
  // phone:string ='';

  private readonly pLATFORM_ID = inject(PLATFORM_ID)
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)

  constructor(
    private registerDataService: RegisterDataService
  ) { }

  ngOnInit(): void {

    if (isPlatformBrowser(this.pLATFORM_ID)) {
      const inputElement = document.getElementById('phone') as HTMLInputElement

      if (inputElement) {
        intlTelInput(inputElement, {
          initialCountry: 'eg',
          separateDialCode: true,
        });
      }
    }
  }


  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
  })

  submitUserInfo() {
    if (this.registerForm.valid) {
      this.registerDataService.registerData = {
        ...this.registerDataService.registerData,
        ...this.registerForm.value
      }
      this.router.navigate(["/password"])
    }
  }
}
