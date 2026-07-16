import { Component } from '@angular/core';
import { StaticPanel } from "../../components/static-panel/static-panel";
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  imports: [StaticPanel, FormsModule, InputTextModule, ButtonModule, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {}
