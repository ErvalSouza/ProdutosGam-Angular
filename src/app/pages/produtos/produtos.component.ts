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
    private mensageService:MensagemService
  ) {
    // this.getTodosProdutos();
  }

  ngOnInit(): void {
this.exibirProdutos(this.produto)
  }

exibirProdutos(produto:Produto): void {
  if(localStorage.getItem(produto.no_produto)){
this.produtos=JSON.parse(localStorage.getItem(produto.no_produto)!)
  }
}

//   getTodosProdutos() {
//     this.produtosService
//       .getTodos()
//       .subscribe((produtos) => (this.produtos = produtos));
//   }

  async excluirProduto(id: number) {
   await this.produtosService.deletarProduto(id).subscribe();
this.mensageService.add("Produto Excluido com Sucesso")
    this.router.navigateByUrl('');
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
  edit(produto:Produto){
this.produto= produto
this.component= !this.component
this.alteraButao()
  }
}
