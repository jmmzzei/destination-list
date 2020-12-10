import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailDestinationComponent } from './detail-destination/detail-destination.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ListComponent },
  { path: 'detail', component: DetailDestinationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
