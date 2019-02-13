import { Injectable } from '@angular/core';
import { Login } from '../_Modals/login';
import { Url } from '../_Modals/url';
import { AllActionNames } from '../_Modals/all-action-names';
import { Http } from '@angular/http';
import 'rxjs-compat/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  UserDetails = [];
  
  constructor(private http: Http) { }
}
