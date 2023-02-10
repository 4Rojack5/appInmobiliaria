import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './views/add/add.component';
import { EditComponent } from './views/edit/edit.component';
import { HomeComponent } from './views/home/home.component';
import { SearchComponent } from './views/search/search.component';

//Todas la rutas creadas

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/home', 
    pathMatch:'full'
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'search', 
    component: SearchComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  { 
    path: '**', 
    redirectTo: '/home', pathMatch: 'full', 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
