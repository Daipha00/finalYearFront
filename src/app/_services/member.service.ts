import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../_model/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private PATH='http://localhost:9090/api/v3/member';

  constructor(private httpClient: HttpClient) { }


  deleteMember(id: number): Observable<object> {
    return this.httpClient.delete(`${this.PATH}/${id}`);
  }

  
  addnewMember(member:FormData): Observable<object>{
    return this.httpClient.post(`${this.PATH}`, member);
   }
 
   getAllMembers(): Observable<Member[]>{
     return this.httpClient.get<Member[]>(`${this.PATH}`);
   }
   
   getMemberById(id:number): Observable<Member>{
     return this.httpClient.get<Member>(`${this.PATH}/${id}`);
 
   }
 
   updateMember(id:number, member: Member): Observable<object>{
     return this.httpClient.put(`${this.PATH}/${id}`,member);
   }
 
 
 
 
}
