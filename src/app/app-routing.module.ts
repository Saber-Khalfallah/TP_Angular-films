import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErreurComponent } from './erreur/erreur.component';
import { AppComponent } from './app.component';
import { yourGuardGuard } from './your-guard.guard';
import { LoginComponent } from './auth/login/login.component';
const routes: Routes = 
[{ path: 'visiteur', loadChildren: () => import('./visiteur/visiteur.module').then(m => m.VisiteurModule) }, 
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{ path:'',redirectTo : 'visiteur' , pathMatch :'full'},
{path : 'login',component:LoginComponent},
{path : "**",component : ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
