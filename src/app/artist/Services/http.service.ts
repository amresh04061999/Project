import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpService {
private baseUrl:string
  constructor( private _http:HttpClient) {
    this.baseUrl=environment.baseUrl
   }
   getartist(){
   return this._http.get(this.baseUrl);
   }
  }
