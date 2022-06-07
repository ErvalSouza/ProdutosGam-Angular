import { Produto } from 'src/app/pages/produtos/Produto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private baseApiUrl= environment.baseApiUrl
  private apiUrl='http://localhost:3000/produtos'


  constructor(private http:HttpClient) { }


deletarProduto(id:number){
const url=`${this.apiUrl}/${id}`
return this.http.delete(url)
}

editarProduto(id:number,produto:Produto ):Observable<Produto>{
  const url=`${this.apiUrl}/${id}`
  return this.http.put<Produto>(url,produto)
}



  getProduto(id:number):Observable<Produto>{
    const url=`${this.apiUrl}/${id}`
    return this.http.get<Produto>(url)
  }
}
