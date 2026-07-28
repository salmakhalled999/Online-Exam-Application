import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor.interface';
import { RegisterRes } from '../interfaces/register.interface';
import { OriginDataRes } from '../interfaces/origin-data.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthAdaptorService implements Adaptor {
  adapt (data:OriginDataRes) : RegisterRes{
    return{
      email :data.user.email,
      username: data.user.username,
      firstName:data.user.firstName,
      lastName:data.user.lastName,
      phone:data.user.phone,
      token:data.token,
    }
  }
}
