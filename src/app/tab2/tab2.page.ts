import { Component } from '@angular/core';
import { DadosService } from './../services/dados.service';
import { ISerie } from '../models/ISerie.models';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { noop } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo ='Series App';

  listaSeries: ISerie[] = [
    {
      nome: 'Ragnarok (2020)',
      duracao: '45 minutos',
      classificacao: 80,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg',
      generos: ['Drama', 'Sci-Fi',' Fantasy', 'Mistério'],
      pagina: '/dados-serie'
    },
    {
      nome: 'The Flash (2014)',
      duracao: '45 minutos',
      classificacao: 77,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg',
      generos: ['Drama', 'Sci-Fi',' Fantasy'],
      pagina: '/dados-serie'
   },
   {
    nome: 'The Good Doctor: O Bom Doutor (2017)',
      duracao: '43 minutos',
      classificacao: 86,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jtLB7xJKcbekmOYkb5NZditBsgk.jpg',
      generos: ['Drama'],
      pagina: '/dados-serie'
   },
   {
    nome: 'Superman e Lois (2021)',
    duracao: '45 minutos',
    classificacao: 80,
    cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vlv1gn98GqMnKHLSh0dNciqGfBl.jpg',
    generos: ['Drama', 'Sci-Fi',' Fantasy', 'Action'],
    pagina: '/dados-serie'
   },
   {
    nome: 'Falcão e o Soldado Invernal (2021)',
      duracao: '50 minutos',
      classificacao: 79,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oF9njYCN6lBdrsi6wfulcxTggvn.jpg',
      generos: ['Drama', 'Sci-Fi',' Fantasy', 'Action',"War&Politics"],
      pagina: '/dados-serie'
   }
   ];

 constructor(public alertController: AlertController,
 public toastController: ToastController,
 public dadosService: DadosService,
 public route: Router  ) {}

 exibirSerie(serie: ISerie){
   this.dadosService.guardarDados('serie',serie);
   this.route.navigateByUrl('/dados-serie');

 }

 async exibirAlertaFavorito() {
   const alert = await this.alertController.create({
     header: 'Alerta!',
     message: 'Deseja realmente favoritar a sua série?',
     buttons: [
       {
         text: 'Cancelar',
         role: 'cancel',
         handler: (blah) => {
           console.log('Confirm Cancel: blah');
         }
       }, {
         text: 'Sim, favoritar',
         handler: () => {
           this.apresentarToast();
         }
       }
     ]
   });

   await alert.present();
 }
 async apresentarToast() {
   const toast = await this.toastController.create({
     message: 'Filme adicionado aos favoritos.',
     duration: 2000,
     color: 'success'
   });
   toast.present();
 }

}


