import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/pages/produtos/Produto';
import { ProdutosService } from 'src/app/pages/produtos/services/produtos.service';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent implements OnInit {

produto?:Produto

  constructor(private produtosServices:ProdutosService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id= Number(this.route.snapshot.paramMap.get('id'))

    this.produtosServices.getProduto(id).subscribe((produto)=>(this.produto = produto))
  }

}
