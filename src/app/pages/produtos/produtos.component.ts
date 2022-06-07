import { LocalStorageService } from './../../local-storage.service';
import { MensagemService } from './../../components/mensagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutosService } from './services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './Produto';

import { faTimes, faEdit, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[]=[];


  produto: Produto= {
    id: 0,
    no_produto: '',
    cd_ean: '',
    nm_valor: '',
    nm_quantidade: ''
  }

  component: boolean= true
  label:string= "Novo Produto"

  faTimes = faTimes;
  faEdit = faEdit;

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute,
    private mensageService:MensagemService,
    private localStorageService:LocalStorageService
  ) {

  }

  ngOnInit(): void {
for (let index = 0; index < localStorage.length; index++) {
this.produtos.push(this.localStorageService.getItem(index.toString()))
}
  }

exibirProdutos(): void {
  if(localStorage.getItem("BD")){
this.produtos=JSON.parse(localStorage.getItem("BD")!)
  }
}


edit(produto:Produto){
  this.produto= produto;
  this.component= !this.component;
  this.alteraButao();

  this.mensageService.add("Produto Editado com Sucesso")
  this.router.navigateByUrl("produtos")
    }

    excluirProduto(key:string){
      this.localStorageService.removeItem(key)
    }


  alterarComponent(){
    this.component= !this.component
    this.alteraButao()
  }

  alteraButao(){
    if(this.component ){
      this.label= "Novo Cadastro"
    }else{
      this.label= "Voltar"
    }
  }

}
