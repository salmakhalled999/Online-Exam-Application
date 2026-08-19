import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { PanelModule, Panel } from 'primeng/panel';
import { PanelComponent } from "../../components/panel/panel.component";

@Component({
  selector: 'app-exams',
  imports: [SidebarComponent, Panel, PanelModule, PanelComponent],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css',
})
export class ExamsComponent {}
