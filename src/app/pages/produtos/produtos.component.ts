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

  faTimes=faTimes;
  faEdit=faEdit;

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private route:ActivatedRoute
  ) {
    this.getTodosProdutos();
  }

  ngOnInit(): void {

  }

  getTodosProdutos() {
    this.produtosService
      .getTodos()
      .subscribe((produtos) => (this.produtos = produtos));
  }



   excluirProduto(id: number) {
     this.produtosService.deletarProduto(id).subscribe();
    this.router.navigateByUrl('produtos');
    alert('Produto excluido com sucesso');

    this.router.navigate(["produtos"])
  }
}
