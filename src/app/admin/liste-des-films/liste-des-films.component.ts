import { Component } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { Film } from 'src/app/shared/models/film';
@Component({
  selector: 'app-liste-des-films',
  templateUrl: './liste-des-films.component.html',
  styleUrls: ['./liste-des-films.component.css']
})
export class ListeDesFilmsComponent {
  tabFilms : Film[]=[];
  constructor (private filmService : FilmsService) {}
  ngOnInit() : void {
    this.tabFilms=this.filmService.getFilms();

  }
  supprimer(str : any) : void {this.filmService.deleteFilm(str)}
}
