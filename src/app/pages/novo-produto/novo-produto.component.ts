import { ProdutosService } from '../produtos/services/produtos.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/components/mensagem.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css'],
})
export class NovoProdutoComponent implements OnInit {

  id:number=0
  no_produto: string = '';
  nm_valor: string = '';
  cd_ean: string = '';
  nm_quantidade: string = '';

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private mensagemService:MensagemService
  ) {}

  cadastrar() {
    console.log('cadastrou');

    const produtoEmitir = {
      id:this.id,
      no_produto: this.no_produto,
      nm_valor: this.nm_valor,
      cd_ean: this.cd_ean,
      nm_quantidade: this.nm_quantidade,
    };
    this.produtosService.criarProduto(produtoEmitir).subscribe((resultado) => {
      console.log(resultado);
this.mensagemService.add("Produto cadastrado com sucesso")
      this.router.navigateByUrl('produtos');

    });
  }
  ngOnInit(): void {}
}
