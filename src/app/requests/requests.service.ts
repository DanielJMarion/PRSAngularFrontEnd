import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, delay, Observable, throwError } from 'rxjs';
import {Request  } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class requestService {


  private requestsurl = environment.PRSWebApiBackEndURL+"api/requests";
  http: any;
  constructor(private webclient: HttpClient) { }

    //method for the vendors to get vendors
    listdata():Observable<Request[]> {
      return this.webclient.get(this.requestsurl) as Observable<Request[]>
    }
    postData(data: Request): Observable<any> {
      return this.webclient.post(this.requestsurl, data)
    }

    updateData(data: Request, id: number): Observable<any> {
      return this.webclient.put(this.requestsurl, data)
    }

    getrequest(id: number):Observable<Request> {
      return this.webclient.get(this.requestsurl+"/"+id) as Observable<Request>

    }
    putrequest(data: Request, id: number): Observable<Request> {
      return this.webclient.put(this.requestsurl + "/" + id, data) as Observable<Request>
    }
}
