import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path:'about', component: AboutComponent },
  { path:'expertise', component: ExpertiseComponent },
  { path:'applications', component: ApplicationsComponent },
  { path:'resume', component: ResumeComponent },
  { path:'contact', component: ContactComponent },
  { path: '**', redirectTo: '/about', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExpertiseComponent,
    ApplicationsComponent,
    ResumeComponent,
    ContactComponent
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
