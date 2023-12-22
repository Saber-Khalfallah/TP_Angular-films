import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent {
  
@Input() desc? : string ;
@Input() f? :Film;
}