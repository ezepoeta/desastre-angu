

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { mainComponent } from "./components/main/main.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbmPersonasComponent } from './abm-personas/abm-personas.component';
import { MaterialModule } from './modules/material/material.module';
import { ConversorPipe } from './conversor.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { CrearPersonaDialogComponent } from "../app/abm-personas/crear.personas/crear-persona-dialog.component";

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    FormularioComponent,
    TablaComponent,
    mainComponent,
    AbmPersonasComponent,
    ConversorPipe,
    CrearPersonaDialogComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    MaterialModule,
  ],
  providers: [ {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
