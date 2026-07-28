import { Component, inject } from '@angular/core';
import { StaticPanel } from "../../components/static-panel/static-panel";
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../../../../../../dist/auth/';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  imports: [StaticPanel, FormsModule, InputTextModule, InputGroupModule, InputGroupAddonModule, IconFieldModule, InputIconModule, ButtonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css',
})
export class UserInfo {
  phone:string ='';

  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)

  registerForm: FormGroup = new FormGroup ({
    firstName : new FormControl(null,[Validators.required]),
    lastName : new FormControl(null,[Validators.required]),
    username : new FormControl(null,[Validators.required]),
    phone : new FormControl(null,[Validators.required]),
  })

  submitUserInfo(){
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.value). subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(["/password"])
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}
