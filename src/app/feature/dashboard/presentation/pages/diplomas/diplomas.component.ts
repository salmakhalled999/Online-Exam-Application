import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';
import { CardComponent } from "../../components/card/card.component";
import { DashboardService } from '../../../application/dashboard/dashboard.service';

@Component({
  selector: 'app-diplomas',
  imports: [SidebarComponent, BreadcrumbModule, CardComponent],
  templateUrl: './diplomas.component.html',
  styleUrl: './diplomas.component.css',
})
export class DiplomasComponent implements OnInit {
  private readonly dashboardService = inject(DashboardService)


  ngOnInit(): void {
    this.dashboardService.getAllDeplomas().subscribe({
      next: (res) => {
        console.log(res);
        
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
