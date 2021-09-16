import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class DataservieService {
   
   public url = environment.baseUrl

  constructor(private http: HttpClient) { }

   
  getList() {
        return  this.http.get(this.url +'/'+ 'feature'+ '.json')
  }
   
}
