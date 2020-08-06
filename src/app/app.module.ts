import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WikiseviceService } from './wikisevice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildSEARCHComponent } from './child-search/child-search.component';
import {HttpClientModule} from '@angular/common/http';
import { ChildPageComponent } from './child-page/child-page.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildSEARCHComponent,
    ChildPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [WikiseviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
