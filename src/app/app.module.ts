import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DestinationComponent } from './destination/destination.component';
import { DetailDestinationComponent } from './detail-destination/detail-destination.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DestinationComponent,
    DetailDestinationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
