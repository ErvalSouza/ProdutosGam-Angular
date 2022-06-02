import { ProdutosService } from '../produtos/services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  constructor(private produtosService:ProdutosService) { }

cadastrar(){
    console.log("cadastrou")
  }
  ngOnInit(): void {
  }

}
