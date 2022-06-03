import { NovoProdutoComponent } from './pages/novo-produto/novo-produto.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditProdutoComponent } from './components/edit-produto/edit-produto.component';

export const routes:Routes=[
{path:"", component:HomeComponent},
{path:"produtos", component:ProdutosComponent},
{path:"produtos/novoproduto", component:NovoProdutoComponent},
{path:"produtos/edit/:id", component:EditProdutoComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})


export class AppRoutingModule {}
