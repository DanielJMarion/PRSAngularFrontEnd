import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { vendor } from './vendor';
import {catchError, delay, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Makes the web service call for user async
export class vendorsService {
private vendorsurl = environment.PRSWebApiBackEndURL+"api/vendors";
  http: any;
  constructor(private webclient: HttpClient) { }

  //method for the user to get users
  listdata():Observable<vendor[]> {
    return this.webclient.get(this.vendorsurl) as Observable<vendor[]>
  }

  postData(data: vendor): Observable<any> {
    return this.webclient.post(this.vendorsurl, data)
  }

  updateData(data: vendor, id: number): Observable<any> {
    return this.webclient.put(this.vendorsurl, data)
  }

  getvendor(id: number):Observable<vendor> {
    return this.webclient.get(this.vendorsurl+"/"+id) as Observable<vendor>

  }

  putvendor(data: vendorsService, id: number): Observable<vendor> {
    return this.webclient.put(this.vendorsurl + "/" + id, data) as Observable<vendor>
  }

}

