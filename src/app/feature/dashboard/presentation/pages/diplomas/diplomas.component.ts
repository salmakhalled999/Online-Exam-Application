import { Component, computed, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CardComponent } from "../../components/card/card.component";
import { DashboardService } from '../../../application/dashboard/dashboard.service';
import { Idiplomas } from '../../../domain/models/idiplomas.interface';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-diplomas',
  imports: [SidebarComponent, BreadcrumbModule, CardComponent],
  templateUrl: './diplomas.component.html',
  styleUrl: './diplomas.component.css',
})
export class DiplomasComponent implements OnInit {

  private readonly dashboardService = inject(DashboardService)
  diplomasList: WritableSignal<Idiplomas[]> = signal([])

  //breadcrumb
  items : MenuItem[] =[{
    label: 'Diplomas',
    RouterLink: '/diplomas'
  }]

  ngOnInit(): void {
    this.getAllDiplomas();
  }

  showAll = signal(false);

  displayedDiplomas = computed(() => {
    const diplomas = this.diplomasList();

    if (this.showAll()) {
      return diplomas;
    }

    return diplomas.slice(0, Math.ceil(diplomas.length / 2));
  });

  viewAll(): void {
    this.showAll.set(true)
  }

  getAllDiplomas() {
    this.dashboardService.getAllDiplomas().subscribe({
      next: (res) => {
        this.diplomasList.set(res.payload.data);
        console.log(this.diplomasList());

      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}
