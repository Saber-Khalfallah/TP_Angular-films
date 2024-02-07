import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { Film } from 'src/app/shared/models/film';
import { BdService } from 'src/app/services/bd.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-liste-des-films',
  templateUrl: './liste-des-films.component.html',
  styleUrls: ['./liste-des-films.component.css']
})
export class ListeDesFilmsComponent implements OnInit{
  tabFilms?: any;
  constructor (private filmService : FilmsService ,private fb :BdService) {}
  ngOnInit() : void {
    //this.tabFilms=this.filmService.getFilms();
    this.recupererFilms();
    
  }
  recupererFilms ()
  {
    this.fb.getFilms().snapshotChanges().subscribe(data=>{this.tabFilms=data;
                                                          console.log(data);});
  }
  //supprimer(str : any) : void {this.filmService.deleteFilm(str)}
  supprimer(cle : any)
  {
    this.fb.supprimerFilm(cle);
  }
}
