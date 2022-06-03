import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Produto } from 'src/app/pages/produtos/Produto';
import { ProdutosService } from 'src/app/pages/produtos/services/produtos.service';
import { MensagemService } from '../mensagem.service';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css'],
})
export class EditProdutoComponent implements OnInit {
  produto!: Produto;

  id: number = 0;
  no_produto: string = "";
  nm_valor: string = '';
  cd_ean: string = '';
  nm_quantidade: string = '';

  constructor(
    private produtosServices: ProdutosService,
    private route: ActivatedRoute,
   private mensagemService: MensagemService,
   private router:Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.produtosServices.getProduto(id).subscribe((produto) => {
      this.produto = produto;
    });
  }

  async editarProduto(novoProduto: Produto) {
    const id = this.produto.id;
    const produtoEditado = {
      id: this.id,
      no_produto: this.no_produto,
      nm_valor: this.nm_valor,
      cd_ean: this.cd_ean,
      nm_quantidade: this.nm_quantidade,
    };

    await this.produtosServices.editarProduto(id!, produtoEditado).subscribe();

    this.mensagemService.add('Produto editado com sucesso');
    this.router.navigateByUrl('produtos');

  }
}
