import borderWidth from "./../../../../../../../node_modules/chart.js/dist/plugins/plugin.tooltip.d"
import { Component, inject, OnInit, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { ProgressBarModule } from 'primeng/progressbar';
import { ChartModule } from 'primeng/chart';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from "@angular/common";
import { DashboardService } from "../../../application/dashboard/dashboard.service";
import { ActivatedRoute } from "@angular/router";
import { Iexams } from "../../../domain/models/iexams.interface";

@Component({
  selector: 'app-answers',
  imports: [SidebarComponent, ChartModule, ProgressBarModule, RadioButton, FormsModule],
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.css',
})
export class AnswersComponent implements OnInit {
  private readonly pLATFORM_ID = inject(PLATFORM_ID)
  private readonly dashboardService = inject(DashboardService)
  private readonly activatedRoute = inject(ActivatedRoute)
  idExam: WritableSignal<string | null> = signal('')
  checked: boolean = false;
  value: boolean = true;
  data: any;
  options: any;

  ngOnInit(): void {
    if (isPlatformBrowser(this.pLATFORM_ID)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
    }

    this.data = {
      labels: ['A', 'B'],
      datasets: [
        {
          data: [300, 50],
          backgroundColor: ['#00BC7D', '#EF4444'],
          borderWidth: 0,
          // hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };

    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          display: false,
          position: 'bottom',
        }
      }
    }
    this.getIdExam();
  }

  //Get Id Exam
  getIdExam() {
    this.dashboardService.getAllExam(this.idExam()).subscribe({
      next: (res) => {
        console.log(res);
        this.idExam.set(res.payload.data[0].id)
        console.log(this.idExam());

        this.getSubmissiondetailsWithAnalytic()

      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getSubmissiondetailsWithAnalytic(){
    this.dashboardService.getSubmissiondetailsWithAnalytics(this.idExam()).subscribe({
      next: (res) => {
        ///////////////// al res gay ghalat /////////////////
        console.log(res);

      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
