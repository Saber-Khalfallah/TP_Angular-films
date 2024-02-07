import { Component } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { BdService } from 'src/app/services/bd.service';
import { Router } from '@angular/router';
import { Film } from 'src/app/shared/models/film';
@Component({
  selector: 'app-ajouter-un-film',
  templateUrl: './ajouter-un-film.component.html',
  styleUrls: ['./ajouter-un-film.component.css']
})
export class AjouterUnFilmComponent {

  constructor(private filmsService : FilmsService, private fb: BdService,
    private router : Router
    ) { }
    ajouterFilm(nom : string,desc: string)
    {
    var x = new Film();
    x.nom=nom;
    x.description=desc;
    x.descVisible=false;
    this.fb.ajouterFilm(x).then (res => {alert ("Votre film est ajouté"); this.router.navigate(['/admin']);
    });
    /*this.filmsService.ajouterFilm(x);*/
    }
}
