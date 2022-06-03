import { NovoProdutoComponent } from './pages/novo-produto/novo-produto.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt');

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { EditProdutoComponent } from './components/edit-produto/edit-produto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProdutosComponent,
    NovoProdutoComponent,
    MensagemComponent,
    EditProdutoComponent,
    ProdutoFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,ReactiveFormsModule, FontAwesomeModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
