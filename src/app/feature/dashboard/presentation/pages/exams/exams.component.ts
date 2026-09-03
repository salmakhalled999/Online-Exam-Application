import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { PanelModule, Panel } from 'primeng/panel';
import { PanelComponent } from "../../components/panel/panel.component";
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../../application/dashboard/dashboard.service';
import { Iexams } from '../../../domain/models/iexams.interface';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';


@Component({
  selector: 'app-exams',
  imports: [SidebarComponent, Panel, PanelModule, PanelComponent, BreadcrumbModule],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css',
})
export class ExamsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute)
  private readonly dashboardService = inject(DashboardService)
  diplomaId: WritableSignal<string | null> = signal('')
  diplomaExames: WritableSignal<Iexams[]> = signal([])
  diplomaTitle = ''
  items: MenuItem[] = [];


  ngOnInit(): void {
    this.getDiplomaIdFromRoute();
  }


  getDiplomaIdFromRoute() {
    this.activatedRoute.paramMap.subscribe((url) => {
      if (url.get('id')) {
        this.diplomaId.set(url.get('id'))
        this.getDiploma();
      }
    })
  }


  getDiploma() {
    this.dashboardService.getDiploma(this.diplomaId()).subscribe({
      next: (res) => {
        console.log(res);
        this.diplomaTitle = res.payload.diploma.title;
        // p-breadcrumb
        this.items = [{
          label: "Diplomas",
          routerLink: "/diplomas"
        },
        {
          label: this.diplomaTitle,
          routerLink: `/diplomas`
        },
        {
          label: "Exams",
          routerLink: "/exams"
        }
        ]
        this.diplomaExames.set(res.payload.diploma.exams);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }




}
