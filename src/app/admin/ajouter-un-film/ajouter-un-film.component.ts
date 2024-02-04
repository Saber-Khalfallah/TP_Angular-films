import { Component } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
@Component({
  selector: 'app-ajouter-un-film',
  templateUrl: './ajouter-un-film.component.html',
  styleUrls: ['./ajouter-un-film.component.css']
})
export class AjouterUnFilmComponent {

  constructor (private filmService : FilmsService){ }
  ajouterFilm(nom:any,desc:any):void{
    this.filmService.ajouterFilm(nom,desc);
  }
}
