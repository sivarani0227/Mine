import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { TravelAgentsComponent } from './travel-agents/travel-agents.component';
import { AgentmanagerComponent } from './agentmanager/agentmanager.component';
import { FilterPipe } from './filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AgentReviewComponent } from './agent-review/agent-review.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HolidaysComponent,
    TravelAgentsComponent,
    AgentmanagerComponent,
    AgentReviewComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [HttpClient],
  entryComponents: [AgentReviewComponent],
  bootstrap: [AgentmanagerComponent]
})
export class AppModule { }
