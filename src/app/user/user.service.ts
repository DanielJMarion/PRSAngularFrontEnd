import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user.class';
import {catchError, delay, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Makes the web service call for user async
export class UserService {
private usersurl = environment.PRSWebApiBackEndURL+"api/users";

  constructor(private webclient: HttpClient) { }

  //method for the user to get users
  listdata():Observable<User[]> {
    return this.webclient.get(this.usersurl) as Observable<User[]>
  }

  postData(data: User): Observable<any> {
    return this.webclient.post(this.usersurl, data)
  }

  updateData(data: User, id: number): Observable<any> {
    return this.webclient.put(this.usersurl, data)
  }

  getUser(id: number):Observable<User> {
    return this.webclient.get(this.usersurl+"/"+id) as Observable<User>

  }
  loginUser(username:string, password:string)
  {

    let loginUrl = this.usersurl + "/" + username + "/" + password;
    return this.webclient.get(loginUrl);
  }
    putUser (data: User, id: number): Observable<User> {
      return this.webclient.put(this.usersurl + "/" + id, data) as Observable<User>
    }
}



