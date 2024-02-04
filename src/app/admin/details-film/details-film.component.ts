import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/shared/models/film';
import { FilmsService } from 'src/app/services/films.service';
@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.component.html',
  styleUrls: ['./details-film.component.css']
})
export class DetailsFilmComponent {
  nomFilm : any ='Affiche le nom du film';
  descFilm : any ='Affiche la description du film';
  constructor (private route : ActivatedRoute, private filmsService : FilmsService){}
  
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.nomFilm = this.filmsService.getFilmParId(+id).nom;
    this.descFilm =
    this.filmsService.getFilmParId(+id).description;
     }
}
