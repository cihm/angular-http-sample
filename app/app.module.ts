import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpRequest } from './wikisearch';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    HttpRequest,
  ]
})
export class AppModule { }