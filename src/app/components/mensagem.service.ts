import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MensagemService {
  mensagem: string = '';

  constructor() {}
  add(mensagem: string) {
    this.mensagem = mensagem;

    setTimeout(() => {
      // this.clear();
    }, 5000);
  }

  // clear() {
  //   this.mensagem = '';
  // }
}
