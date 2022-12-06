export interface Persona {
    id:number,
    nombre: string,
    edad: number,
    fechaInterface: Date,
    carrera: Array<string>,
};

export let ListaPersonas: Persona[] = [
    {
        id:1,
        nombre:'Ezequiel',
        edad:28,
        fechaInterface: new Date(),
        carrera: [ ]
    },
    {
        id:2,
        nombre:'Jose',
        edad:25,
        fechaInterface: new Date(),
         carrera: [ ]
    },
    {
        id:3,
        nombre:'Mike',
        edad:32,
        fechaInterface: new Date(),
         carrera: [ ]
    },
]