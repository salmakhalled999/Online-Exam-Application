import { Component } from '@angular/core';
import { StaticPanel } from "../../components/static-panel/static-panel";
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-user-info',
  imports: [StaticPanel, FormsModule, InputTextModule, InputGroupModule, InputGroupAddonModule, IconFieldModule, InputIconModule, ButtonModule, RouterLink],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css',
})
export class UserInfo {
  phone:string ='';
}
