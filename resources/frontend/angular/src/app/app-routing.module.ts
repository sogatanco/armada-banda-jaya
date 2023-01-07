import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CHomeComponent } from './c-home/c-home.component';


const routes: Routes = [
  {path:'', component:CHomeComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
