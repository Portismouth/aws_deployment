import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  { path: 'edit/:id', component: EditComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new', component: CreateComponent },
  { path: 'show/:id', component: ShowComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
