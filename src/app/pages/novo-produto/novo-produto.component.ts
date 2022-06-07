import { LocalStorageService } from './../../local-storage.service';
import { FormControl, NgForm, FormGroup } from '@angular/forms';
import { ProdutosService } from '../produtos/services/produtos.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/components/mensagem.service';
import { Produto } from '../produtos/Produto';

import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css'],
})
export class NovoProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  @Input() produto: Produto = {};

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private mensagemService: MensagemService,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.produtos = [];
  }

  cadastrar(): void {
    if(!this.produto.id){
      this.produto.id=0
    }

    this.localStorage.setItem(this.produto)

    this.mensagemService.add('Produto Cadastrado com sucesso');
    this.router.navigateByUrl('produtos');

  }
}
