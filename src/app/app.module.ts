import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'expertise', component: ExpertiseComponent },
  { path:'applications', component: ApplicationsComponent },
  { path:'resume', component: ResumeComponent },
  { path:'contact', component: ContactComponent },
  { path: '', redirectTo: '/home'}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
