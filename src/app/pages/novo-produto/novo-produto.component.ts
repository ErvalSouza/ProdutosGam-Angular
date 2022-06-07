import { FormControl, NgForm } from '@angular/forms';
import { ProdutosService } from '../produtos/services/produtos.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/components/mensagem.service';
import { Produto } from '../produtos/Produto';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css'],
})
export class NovoProdutoComponent implements OnInit {
  produto!: Produto;

  // id: number = 0;
  // no_produto: string = '';
  // nm_valor: string = '';
  // cd_ean: string = '';
  // nm_quantidade: string = '';

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private mensagemService: MensagemService
  ) {}

  ngOnInit(): void {
    this.produto= new Produto()
  }

  cadastrar(form:NgForm){
if(form.valid){
  this.produtosService.criarProduto(this.produto);
  this.mensagemService.add("Produto cadastrado com Sucesso");
  this.router.navigateByUrl("produtos")
}
  }

  // cadastrar() {
  //   console.log('cadastrou');

  //   this.produtosService.criarProduto(this.produto).subscribe((resultado) => {
  //     console.log(resultado);
  //     this.mensagemService.add('Produto cadastrado com sucesso');
  //     this.produto = {};
  //     this.router.navigateByUrl('produtos');
  //   });
  // }


}
