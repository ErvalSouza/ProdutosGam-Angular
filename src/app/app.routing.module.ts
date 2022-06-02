import { NovoProdutoComponent } from './pages/novo-produto/novo-produto.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes:Routes=[
{path:"", component:HomeComponent},
{path:"produtos", component:ProdutosComponent},
{path:"produtos/novoproduto", component:NovoProdutoComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})


export class AppRoutingModule {}
