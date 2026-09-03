import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';



@Component({
  selector: 'app-sidebar',
  imports: [MenuModule,],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone: true,
})
export class SidebarComponent {
  private readonly router = inject(Router)


  items : MenuItem[] = [
    {
      label:'Account',
      icon:'pi pi-user',
      // command : ()=>{
      //   this.router.navigate([''])
      // }
    },
    {
      label:'Dashboard',
      icon:'pi pi-cog',
      // command: ()=>{
      //   this.router.navigate([''])
      // }
    },
    {
      label:'Logout',
      icon:'pi pi-sign-out',
      styleClass: 'logout-item',
      // command: ()=>{
      //   this.router.navigate([''])
      // }
    }
  ]

}
