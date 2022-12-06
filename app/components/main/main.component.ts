import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class mainComponent implements OnInit {
  
  usuarios: any[] = [this.agregarUsuario];
 

  constructor() { }

  ngOnInit(): void {
  }

  agregarUsuario($event: any): void {
    this.usuarios.push($event);
  }

}





