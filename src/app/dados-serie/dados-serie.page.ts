import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { ISerie } from '../models/ISerie.models';

@Component({
  selector: 'app-dados-serie',
  templateUrl: './dados-serie.page.html',
  styleUrls: ['./dados-serie.page.scss'],
})
export class DadosSeriePage implements OnInit {

  serie: ISerie;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.serie = this.dadosService.pegarDados('serie');
    console.log('Serie  Enviado', this.serie);
  }
}
