import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, from, interval, map, mergeMap, Observable, of } from 'rxjs';
import { Curso } from './models/curso';
import { CursoService } from './services/curso.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
getUsers() {
throw new Error('Method not implemented.');
}
  readonly ROOT_URL = 'https://6364413f8a3337d9a2f46170.mockapi.io/api/v1/';
  title = 'comunicacionComponentes';
    cursos!: Curso[];  
    cursos$: Observable<Curso[]>;
    suscripcion: any;
    promesa: any;
    merge$!: Observable<any>;
   users: any ;

constructor(
  private cursoService: CursoService,
  private http: HttpClient
){
  this.promesa = cursoService.obtenerCursosPromise()

this.suscripcion = cursoService.obtenerCursosObservable().subscribe({
  next: (cursos: Curso[]) => {
    this.cursos = cursos;
  
  },
  error: (error) => {
    console.error(error);
  }
});
this.cursos$ = cursoService.obtenerCursosObservable();
}

getPosts(){this.users = this.http.get(this.ROOT_URL + 'users');}

ngOnDestroy(){
this.suscripcion.unsubscribe();
}
ngOnInit(): void {

  this.merge$ = of(['a', 'b', 'c', 'd']).pipe(
    mergeMap(
      letras => interval(2000).pipe(
        map((i) => i + letras[i])
      )
    )
  )}



agregarCurso(){
  let curso: Curso = {
      nombre: 'TypeScript',
      comision: '32320',
      profesor: 'Jesica',
      fechaInicio: new Date(),
      fechaFin: new Date()
    }
  this.cursoService.agregarCurso(curso);
}
}
