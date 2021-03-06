import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list-component';
import { EventThumbNailComponent } from './events/event-thumbnail-component';
import { NavBarComponent } from './nav/nav-bar-component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbNailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
