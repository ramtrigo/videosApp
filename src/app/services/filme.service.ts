import { IListaFilmes } from './../models/IFilmeAPI.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  lingua = 'pt-BR';
  regiao = 'BR';
  private apiURL = 'https://api.themoviedb.org/3/';
  private key ='?api_key=adbe2ada5a23f1bd9942bba991f5a9a6'

  constructor(private http: HttpClient,public toastController: ToastController) { }

  buscarFilmes(busca: string): Observable<IListaFilmes>{
  const url = `${this.apiURL}search/movie${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;

  return this.http.get<IListaFilmes>(url).pipe(
    map(retorno => retorno),
    catchError(erro => this.exibirErro(erro))
  );
  }
  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consulta API',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
