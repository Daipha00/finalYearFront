import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles: []){
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('roles', JSON.stringify(roles));
    }
  }

  public getRoles(): [] {
    if (typeof localStorage !== 'undefined') {
      const rolesString = localStorage.getItem('roles');
      if (rolesString === null) {
        return [];
      }
      return JSON.parse(rolesString);
    } else {
      return [];
    }
  }

  public setToken (jwtToken: string){
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('jwtToken', jwtToken);
    }
  }

  public getToken(): string|null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('jwtToken');
    } else {
      return null;
    }
  }

  public clear(){
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
  }

  public isLoggedIn(){
   return this.getRoles() && this.getToken();
  }

  public isAdmin(){
    const roles: any[] =  this.getRoles();
    // return roles[0].roleName === 'Admin';
    return roles.length > 0 && roles[0].roleName === 'Admin';
  }

  public isUser(){
    const roles: any[] =  this.getRoles();
    // return roles[0].roleName === 'User';
    return roles.length > 0 && roles[0].roleName === 'User';
  }
}
