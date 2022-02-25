import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CuerpoPrincipalComponent } from './componentes/cuerpo-principal/cuerpo-principal.component';
import { DisplayComponent } from './componentes/display/display.component';
import { NumerosComponent } from './componentes/numeros/numeros.component';
import { BotonesComponent } from './componentes/botones/botones.component';
import { OperacionesServicesService } from './servicios/operaciones-services.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CuerpoPrincipalComponent,
    DisplayComponent,
    NumerosComponent,
    BotonesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [OperacionesServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
