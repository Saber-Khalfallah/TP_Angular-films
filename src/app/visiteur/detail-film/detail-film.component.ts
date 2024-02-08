import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent {
  toggleDescription(): void {
    this.descVisible = !this.descVisible;
  }
@Input() desc? : string ;
@Input() f? :any;
@Input() descVisible?:boolean=false;
}