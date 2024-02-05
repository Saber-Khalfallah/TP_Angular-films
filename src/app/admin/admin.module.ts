import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AjouterUnFilmComponent } from './ajouter-un-film/ajouter-un-film.component';
import { ListeDesFilmsComponent } from './liste-des-films/liste-des-films.component';
import { DetailsFilmComponent } from './details-film/details-film.component';
import { ModifierFilmComponent } from './modifier-film/modifier-film.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    AjouterUnFilmComponent,
    ListeDesFilmsComponent,
    DetailsFilmComponent,
    ModifierFilmComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
