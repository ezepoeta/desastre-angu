import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-persona-dialog',
  templateUrl: './crear-persona-dialog.component.html',
  styleUrls: ['./crear-persona-dialog.component.css']
})
export class CrearPersonaDialogComponent implements OnInit {

  formPersona: FormGroup = this.fb.group(
    {
      nombre:[null,Validators.required],
      edad:[null,Validators.required],
    }
  )

  constructor(
    public dialogRef: MatDialogRef <CrearPersonaDialogComponent>,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
  }

  guardar() {
    this.dialogRef.close(this.formPersona.value)
  }

}