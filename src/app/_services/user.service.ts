import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { UserComponent } from '../user/user.component';
import { Observable } from 'rxjs';
import { User } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH =  "http://localhost:9090/api/v3"
  
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(private httpclient: HttpClient,
              private userAuthService: UserAuthService
    ) { }


public register(registerData: any){
  return this.httpclient.post(this.PATH + '/registerNewUser', registerData)
}

  public login(loginData: any) {
    return this.httpclient.post(this.PATH + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  // getOwnUser(id: number): Observable<UserComponent[]> {
  //   return this.httpclient.get<UserComponent[]>(`${this.PATH}/viewOwnDetails/${id}`);
  // }

  public getOwnUser(id: number): Observable<User> {
    return this.httpclient.get<User>('http://localhost:8080/getProduct/' + id);
  }

 
  public roleMatch(allowedRoles: any): boolean {
    let isMatch = false;
    let userRoles: any = this.userAuthService.getRoles();
  
    if (userRoles !== null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            break; // Break out of the inner loop when a match is found
          }
        }
        if (isMatch) {
          break; // Break out of the outer loop when a match is found
        }
      }
    }
    return isMatch;
  }
}
