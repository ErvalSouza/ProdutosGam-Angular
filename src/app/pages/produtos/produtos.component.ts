import { ProdutosService } from './services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './Produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos:Produto[]=[]

  constructor(private produtosService:ProdutosService) {
    this.getTodosProdutos()
   }

  ngOnInit(): void {
  }

  getTodosProdutos(){
    this.produtosService.getTodos().subscribe((produtos)=>(this.produtos=produtos))
  }

}
