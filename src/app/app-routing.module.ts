import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './views/add/add.component';
import { EditComponent } from './views/edit/edit.component';
import { HomeComponent } from './views/home/home.component';

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
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
