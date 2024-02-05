import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AjouterUnFilmComponent } from './ajouter-un-film/ajouter-un-film.component';
import { ListeDesFilmsComponent } from './liste-des-films/liste-des-films.component';
import { DetailsFilmComponent } from './details-film/details-film.component';
import { ModifierFilmComponent } from './modifier-film/modifier-film.component';
import { AuthGuardService } from '../auth/auth.guard';
const routes: Routes = [
  { path: '', component: AdminComponent ,canActivate : [AuthGuardService],
            children :[
                      {path : 'ajouter-un-film' , component : AjouterUnFilmComponent},
                      {path : 'liste-des-films', component : ListeDesFilmsComponent},
                      {path: 'details/:id', component: DetailsFilmComponent },
                      {path: 'modifier/:id', component: ModifierFilmComponent }
                     ]},
                     
  
            
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
