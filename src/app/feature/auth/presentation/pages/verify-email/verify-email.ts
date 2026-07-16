import { Component } from '@angular/core';
import { StaticPanel } from "../../components/static-panel/static-panel";
import { InputOtpModule } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  standalone:true,
  selector: 'app-verify-email',
  imports: [StaticPanel, InputOtpModule, FormsModule, RouterLink],
  templateUrl: './verify-email.html',
  styleUrl: './verify-email.css',
})
export class VerifyEmail {
otp :string =''
}
