import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AjouterUnFilmComponent } from './ajouter-un-film/ajouter-un-film.component';
import { ListeDesFilmsComponent } from './liste-des-films/liste-des-films.component';


@NgModule({
  declarations: [
    AdminComponent,
    AjouterUnFilmComponent,
    ListeDesFilmsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
