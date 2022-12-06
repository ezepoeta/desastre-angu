import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CrearPersonaDialogComponent } from '../abm-personas/crear.personas/crear-persona-dialog.component';
import {ListaPersonas} from '../models/persona';



@Component({
  selector: 'app-abm-personas',
  templateUrl: './abm-personas.component.html',
  styleUrls: ['./abm-personas.component.css']
})
export class AbmPersonasComponent implements OnInit {

  dataInicial = ListaPersonas

  ELEMENT_DATA = new MatTableDataSource()
  displayedColumns: string[] = ['nombre', 'edad','accion'];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.ELEMENT_DATA.data = this.dataInicial
  }

  borrar(id: number) {
    let position = this.dataInicial.findIndex(persona => persona.id == id)
    this.dataInicial.splice(position, 1)
    this.ELEMENT_DATA.data = this.dataInicial
  }

  openDialog() {
    let dialog = this.dialog.open(CrearPersonaDialogComponent, {
      width: '50%',
      height: '50%',
      
    });

    dialog.beforeClosed().subscribe(res => {
      console.log(res);
      this.dataInicial.push(
        {
          ...res,
          id:this.dataInicial.length+1
        }
      )
      this.ELEMENT_DATA.data = this.dataInicial
    })
  }
}