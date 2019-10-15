import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstHomeWorkComponent } from './first-home-work/first-home-work.component';
import { SecondHomeWorkComponent } from './second-home-work/second-home-work.component';


const routes: Routes = [
  { path: '', redirectTo: 'second-home-work', pathMatch:'full'},
  { path: 'first-home-work', component: FirstHomeWorkComponent},
  { path: 'second-home-work', component: SecondHomeWorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
