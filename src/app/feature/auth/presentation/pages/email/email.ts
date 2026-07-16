import { Component } from '@angular/core';
import { StaticPanel } from "../../components/static-panel/static-panel";
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-email',
  imports: [StaticPanel, InputTextModule, ButtonModule, IconFieldModule, InputIconModule, RouterLink],
  templateUrl: './email.html',
  styleUrl: './email.css',
})
export class Email {}
