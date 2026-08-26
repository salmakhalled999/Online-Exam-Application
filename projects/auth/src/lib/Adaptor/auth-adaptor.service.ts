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
      email :data.payload.user.email,
      username: data.payload.user.username,
      firstName:data.payload.user.firstName,
      lastName:data.payload.user.lastName,
      phone:data.payload.user.phone,
      token:data.payload.token,
    }
  }
}
