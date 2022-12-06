import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from "@angular/material/table";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule
  ], 
  exports: [
    MatTableModule, 
   MatButtonModule,
    MatCardModule,
     MatIconModule, 
     MatInputModule,
     MatFormFieldModule,
     MatDialogModule
  ],
})
export class MaterialModule { }
