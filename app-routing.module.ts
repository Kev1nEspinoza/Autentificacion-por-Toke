import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';  
import { AuthGuard} from '@auth0/auth0-angular';

const routes: Routes = [
  {path :'home', component:HomeComponent},
  {path :'navbar',component : NavbarComponent},
  {path : 'precios', component : PreciosComponent},
  {path : 'protegida', component : ProtegidaComponent, canActivate :[AuthGuard]},
  {path : '**', pathMatch : 'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
