import { Component, OnInit } from '@angular/core';
import { MensagemService } from '../mensagem.service';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {
  faTimes=faTimes

  constructor(public messagesService:MensagemService) { }

  ngOnInit(): void {
  }

}
