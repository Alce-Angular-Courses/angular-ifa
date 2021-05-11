import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import LocaleEs from "@angular/common/locales/es";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
// import { StoreTareasService } from './services/store-tareas.service';

registerLocaleData(LocaleEs, 'es')

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es'},
    // StoreTareasService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
