import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public PERSONA: Array<Persona> = [{
    id: 1,
    nombre: 'Ezequiel',
    edad: 28,
    fechaInterface: this.fechaInicio(12000),
    carrera: ['Desarrollo Web'],
  },
  {
    id: 2,
    nombre: 'Juan',
    edad: 21,
    fechaInterface: this.fechaInicio(20000),
    carrera: ['Diseño ux/ui'],
  },
  {
    id: 3,
    nombre: 'Walter',
    edad: 30,
    fechaInterface: this.fechaInicio(5000),
    carrera: ['FrontEnd'],
  },
  {
    id: 4,
    nombre: 'Anton',
    edad: 42,
    fechaInterface: this.fechaInicio(300),
    carrera: ['BackEnd'],
  },
  {
    id: 5,
    nombre: 'Lucas',
    edad: 18,
    fechaInterface: this.fechaInicio(60000),
    carrera: ['CiberSeguridad'],
  }]

  constructor() { }

  fechaInicio(horasEnMinutos: number): Date{
    const fechaActual = new Date()
    const fechaActualEnMilisegundos = fechaActual.getTime() 
    const milisegundos = horasEnMinutos * 1200000;
    const fechaIncripcion = new Date(fechaActualEnMilisegundos - milisegundos)
    return fechaIncripcion;
  }

  ngOnInit(): void {
  }

}
