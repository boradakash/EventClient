import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EventComponent } from './component/event/event.component';
import { EventDetailComponent } from './component/event-detail/event-detail.component';

const appRoutes: Routes = [
  { path: 'event', component: EventComponent },
  { path: 'event-detail/:id',      component: EventDetailComponent },
  { path: '',
    redirectTo: '/event',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
