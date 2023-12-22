import { Component, OnInit } from '@angular/core';
import { FILMS } from 'src/app/shared/models/des-films';
import { Film } from 'src/app/shared/models/film';
@Component({
selector: 'app-home-visiteur',
templateUrl: './home-visiteur.component.html',
styleUrls: ['./home-visiteur.component.css']
})
export class HomeVisiteurComponent implements OnInit {
tabFilms: Film[] = FILMS;
check(f:Film) : any
{
  return (f.descVisible ?  'Moins d \'infos' : 'Plus d\'infos')  
}
swap(f : Film)
{
  f.descVisible=!f.descVisible;
}
constructor() { }
ngOnInit(): void {
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