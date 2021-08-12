import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReaderTestComponent } from './reader-test/reader-test.component';
import { HeaderComponent } from './header/header.component';
import { OptionsComponent } from './options/options.component';
import { SavedComponent } from './saved/saved.component';
import { ResultsComponent } from './results/results.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ReaderTestComponent,
    HeaderComponent,
    OptionsComponent,
    SavedComponent,
    ResultsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
