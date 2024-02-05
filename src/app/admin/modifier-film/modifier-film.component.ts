import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modifier-film',
  templateUrl: './modifier-film.component.html',
  styleUrls: ['./modifier-film.component.css']
})
export class ModifierFilmComponent {
  nomFilm : any ='Affiche le nom du film';
  descFilm : any ='Affiche la description du film';
  constructor (private route : ActivatedRoute, private filmsService : FilmsService, private router:Router){}

  ngOnInit() {
    const id =this.route.snapshot.params['id'];
    this.nomFilm = this.filmsService.getFilmParId(+id).nom;
    this.descFilm = this.filmsService.getFilmParId(+id).description;
     }
     soumettre(f: NgForm) {
      const id =this.route.snapshot.params['id'];
      this.filmsService.modifierFilm(id-1,f.value["nom"],f.value["desc"]);
      this.router.navigate(['admin/liste-des-films'])
      
      }
}

