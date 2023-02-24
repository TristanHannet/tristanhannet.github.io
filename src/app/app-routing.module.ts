import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { DatatableComponent } from './datatable/datatable.component';
import { DailyImageComponent } from './daily-image/daily-image.component';

const routes: Routes = [
  { path: '', component: DatatableComponent },
  { path: 'daily', component: DailyImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }