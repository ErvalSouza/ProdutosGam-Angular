import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Produto } from '../Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private apiUrl='http://localhost:3000/produtos'

  constructor(private http:HttpClient) { }

criarProduto(produto:Produto):Observable<Produto>{
return this.http.post<Produto>(this.apiUrl, produto)
}

  getTodos():Observable<Produto[]>{
return this.http.get<Produto[]>(this.apiUrl)
  }
}
