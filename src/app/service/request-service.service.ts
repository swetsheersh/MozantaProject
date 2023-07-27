import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  constructor(private http:HttpClient) { }

  fetch(){
    return this.http.get('http://localhost:8080/getall');
  }
  save(data:any){
    return this.http.post('http://localhost:8080/save',data);
  }
}
