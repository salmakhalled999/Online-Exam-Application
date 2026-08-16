import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component} from '@angular/core';
import { StaticPanel } from "../../components/static-panel/static-panel";
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { RegisterDataService } from '../../services/register-data.service';
import { AuthService } from '../../../../../../../dist/auth/types/auth';
import { inject } from '@angular/core/primitives/di';


@Component({
  selector: 'app-verify-otp',
  imports: [StaticPanel, IconFieldModule, InputIconModule ,ButtonModule, RouterLink],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css',
})
export class VerifyOtp {

}
