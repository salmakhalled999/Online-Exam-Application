import { Component } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-diplomas',
  imports: [SidebarComponent, BreadcrumbModule, CardComponent],
  templateUrl: './diplomas.component.html',
  styleUrl: './diplomas.component.css',
})
export class DiplomasComponent {

}
