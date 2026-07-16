import { Component } from '@angular/core';
import { StaticPanel } from "../../components/static-panel/static-panel";
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RouterLink} from "@angular/router";



@Component({
  selector: 'app-login',
  imports: [StaticPanel, InputTextModule, IconFieldModule, InputIconModule, PasswordModule, ButtonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,





})
export class Login { }
