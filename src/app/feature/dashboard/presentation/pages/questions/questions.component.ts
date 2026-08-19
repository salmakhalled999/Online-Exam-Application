import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'app-questions',
  imports: [PanelModule, ProgressBarModule, SidebarComponent, KnobModule, FormsModule, RadioButtonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css',
})
export class QuestionsComponent implements OnInit{

progress = -75;
radius = 27.5;
circumference = 2 * Math.PI * this.radius;
get progressOffset() {
  return this.circumference * (1 - this.progress / 100);
}

  selectedCategory: any = null;
  categories: any[] = [
    {name:'Computer Style Sheets', key:'1'},
    {name:'Creative Style Sheets', key:'2'},
    {name:'Cascading Style Sheets', key:'3'},
    {name:'Colorful Style Sheets', key:'4'},
  ];

  ngOnInit(): void {
    this.selectedCategory = this.categories[1];
  }
}
