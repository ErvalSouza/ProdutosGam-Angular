import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';

import { Produto } from '../Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private baseApiUrl= environment.baseApiUrl
  private apiUrl='http://localhost:3000/produtos'


  constructor(private http:HttpClient) { }

criarProduto(produto:Produto):Observable<Produto>{
return this.http.post<Produto>(this.apiUrl, produto)
}


deletarProduto(id:number){
const url=`${this.apiUrl}/${id}`
return this.http.delete(url)
}

editarProduto(id:number,produto:Produto ):Observable<Produto>{
  const url=`${this.apiUrl}/${id}`
  return this.http.put<Produto>(url,produto)
}

  getTodos():Observable<Produto[]>{
return this.http.get<Produto[]>(this.apiUrl)
  }

  getProduto(id:number):Observable<Produto>{
    const url=`${this.apiUrl}/${id}`
    return this.http.get<Produto>(url)
  }
}
