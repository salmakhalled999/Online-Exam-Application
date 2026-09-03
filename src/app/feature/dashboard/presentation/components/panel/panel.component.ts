import { Component, input, InputSignal } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { Idiplomas } from '../../../domain/models/idiplomas.interface';
import { Iexams } from '../../../domain/models/iexams.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-panel',
  imports: [PanelModule, RouterLink],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css',
})
export class PanelComponent {
  data : InputSignal<Iexams> = input.required<Iexams>();
  showDetails = false

  toggleDetails(){
    this.showDetails = !this.showDetails
  }
}
