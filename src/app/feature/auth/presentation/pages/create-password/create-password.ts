import { Component } from '@angular/core';
import { StaticPanel } from "../../components/static-panel/static-panel";
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-password',
  imports: [StaticPanel, FormsModule, InputTextModule, IconFieldModule, InputIconModule, ButtonModule, PasswordModule, RouterLink  ],
  templateUrl: './create-password.html',
  styleUrl: './create-password.css',
})
export class CreatePassword {}
