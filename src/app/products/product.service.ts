import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, delay, Observable, throwError } from 'rxjs';
import { product} from './product';

@Injectable({
  providedIn: 'root'
})
export class productservice {
  private producturl = environment.PRSWebApiBackEndURL+"api/products";
    constructor(private webclient: HttpClient) { }

    //method for the vendors to get vendors
    listdata():Observable<product[]> {
      return this.webclient.get(this.producturl) as Observable<product[]>
    }
    postData(data: product): Observable<any> {
      return this.webclient.post(this.producturl, data)
    }

    updateData(data: product, id: number): Observable<any> {
      return this.webclient.put(this.producturl, data)
    }

    getproduct(id: number):Observable<product> {
      return this.webclient.get(this.producturl+"/"+id) as Observable<product>

    }
    putProduct(data: product, id: number): Observable<product> {
      return this.webclient.put(this.producturl + "/" + id, data) as Observable<product>
}}
