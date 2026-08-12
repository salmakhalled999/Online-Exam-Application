import borderWidth from "./../../../../../../../node_modules/chart.js/dist/plugins/plugin.tooltip.d"
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { ProgressBarModule } from 'primeng/progressbar';
import { ChartModule } from 'primeng/chart';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from "@angular/common";
@Component({
  selector: 'app-answers',
  imports: [SidebarComponent, ChartModule, ProgressBarModule, RadioButton, FormsModule],
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.css',
})
export class AnswersComponent implements OnInit {
  checked: boolean = false;
  value:boolean = true;

  data: any;
  options: any;

  private readonly pLATFORM_ID = inject(PLATFORM_ID)

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



  }
}
