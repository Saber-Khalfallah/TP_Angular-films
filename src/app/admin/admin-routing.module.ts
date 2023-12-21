import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AjouterUnFilmComponent } from './ajouter-un-film/ajouter-un-film.component';
import { ListeDesFilmsComponent } from './liste-des-films/liste-des-films.component';

const routes: Routes = [
  { path: '', component: AdminComponent ,
            children :[
                      {path : 'ajouter-un-film' , component : AjouterUnFilmComponent},
                      {path : 'liste-des-films', component : ListeDesFilmsComponent}],
  
            }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
