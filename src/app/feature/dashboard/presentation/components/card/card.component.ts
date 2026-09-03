import { Component, input, Input, InputSignal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Idiplomas } from '../../../domain/models/idiplomas.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [CardModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  // @Input({required:true}) data !: Idiplomas
  data : InputSignal<Idiplomas> = input.required<Idiplomas>();
}
