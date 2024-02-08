import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/shared/models/film';
import { BdService } from 'src/app/services/bd.service';
@Component({
selector: 'app-home-visiteur',
templateUrl: './home-visiteur.component.html',
styleUrls: ['./home-visiteur.component.css']
})
export class HomeVisiteurComponent implements OnInit {
/*

  check(f:Film) : any
{
  return (f.descVisible ?  'Moins d \'infos' : 'Plus d\'infos')  
}
  swap(f : Film)
{
  f.descVisible=!f.descVisible;
}
*/
tabFilms?: any;
  constructor (private fb :BdService) {}
  ngOnInit() : void {
    //this.tabFilms=this.filmService.getFilms();
    this.recupererFilms();
    
  }
  recupererFilms ()
  {
    this.fb.getFilms().snapshotChanges().subscribe(data=>{this.tabFilms=data;
                                                          console.log(data);});
  }
}
export function check(f:Film) : any
{
  return (f.descVisible ?  'Moins d \'infos' : 'Plus d\'infos')  
}
export function swap(f : Film)
{
  f.descVisible=!f.descVisible;
}