import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
api="http://localhost:3000/posts"
  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    return this.http.get(this.api);
  }
  addProduct(data:any):Observable<any>{
    return this.http.post(this.api,data)
  }
  deleteProduct(id:any):Observable<any>{
    return this.http.delete(`${this.api}/${id}`)
  }
  updateData(id:number,data:any){
    return this.http.put(`${this.api}/${id}`, data)
  }
  getProductById(id:number){
    return this.http.get(`${this.api}/${id}`)
  }
}
