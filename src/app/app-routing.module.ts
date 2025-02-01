import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjetctsComponent } from './components/projetcts/projetcts.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjetctsComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }, // Redireciona para Sobre Mim

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
