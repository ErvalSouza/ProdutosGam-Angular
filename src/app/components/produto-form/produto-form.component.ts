import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Produto } from 'src/app/pages/produtos/Produto';


@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {
  @Output()onSubmit= new EventEmitter<Produto>()
@Input() btnText!:string

produtoForm!:FormGroup


  id:number=0
  no_produto: string = '';
  nm_valor: string = '';
  cd_ean: string = '';
  nm_quantidade: string = '';




  constructor() { }

  ngOnInit(): void {
    this.produtoForm= new FormGroup({
      id: new FormControl(''),
      no_produto: new FormControl('',[Validators.required]),
      nm_valor: new FormControl('',[Validators.required]),
      cd_ean: new FormControl(''),
      nm_quantidade: new FormControl('',[Validators.required]),
    })
  }




  submit(){
   if(this.produtoForm.invalid){
     return;
   }

    console.log(this.produtoForm.value)

    this.onSubmit.emit(this.produtoForm.value)
  }
}
