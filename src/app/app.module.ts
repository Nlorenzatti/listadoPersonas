import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { FormsModule } from '@angular/forms';
import { PersonasComponent } from './personas/personas.component';
import { PersonasService } from './personas.service';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { LoginGuardian } from './login/login-guardian.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoggingService,PersonasService,DataServices, LoginService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
