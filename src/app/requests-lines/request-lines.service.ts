import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, delay, Observable, throwError } from 'rxjs';
import { Requestline } from './requestline.class';
import { ReactiveFormsModule } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class RequestLinesService {
  private requestlineurl = environment.PRSWebApiBackEndURL+"api/requestlines";
    constructor(private webclient: HttpClient) { }

    //method for the vendors to get vendors
    listdata():Observable<Requestline[]> {
      return this.webclient.get(this.requestlineurl) as Observable<Requestline[]>
    }
    postData(data: Requestline): Observable<any> {
      return this.webclient.post(this.requestlineurl, data)
    }

    updateData(data: Requestline, id: number): Observable<any> {
      return this.webclient.put(this.requestlineurl, data)
    }

}
