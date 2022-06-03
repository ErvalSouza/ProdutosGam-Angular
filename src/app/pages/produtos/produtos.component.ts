import { MensagemService } from './../../components/mensagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutosService } from './services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './Produto';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  faTimes = faTimes;
  faEdit = faEdit;

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute,
    private mensageService:MensagemService
  ) {
    this.getTodosProdutos();
  }

  ngOnInit(): void {}

  getTodosProdutos() {
    this.produtosService
      .getTodos()
      .subscribe((produtos) => (this.produtos = produtos));
  }

  async excluirProduto(id: number) {
   await this.produtosService.deletarProduto(id).subscribe();
this.mensageService.add("Produto Excluido com Sucesso")
    this.router.navigateByUrl('');
  }
}
