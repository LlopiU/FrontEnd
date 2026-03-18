import { TokenService } from './../../service/token.service';
import { EducacionService } from './../../service/educacion.service';
import { Educacion } from './../../model/educacion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];
  constructor(
    private educacionS: EducacionService,
    private tokenService: TokenService,
  ) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    // this.educacionS.lista().subscribe(
    //   data=>{
    //     this.educacion = data;
    //   }
    // )

    const educacionS: Educacion[] = [
      {
        id: 1,
        nombreE: 'Ingenieria en Sistemas de Información',
        descripcionE:
          'Estudiante avanzado en la Universidad Tecnológica Nacional en Ingeniria en Sistemas de Información. (4to año)',
      },
      {
        id:2,
        nombreE:'Técnico en Informatica profesional y personal',
        descripcionE:'Recibido de escuela Técnica Carmen Molina de Llano y Anexo San Vicente de Paul'
      },
      {
        id: 3,
        nombreE: 'Curso de Desarrollo',
        descripcionE:'Desarrollo Web Full Stack Junior en Java (Argentina Programa - #YoProgramo) '
      },
      {
        id:4,
        nombreE:'Curso sobre IA',
        descripcionE:'Introducción | Formación en Datos e Inteligencia Artificial (Argentina Programa 4.0)'
      }

    ];

    // Asignamos directamente los datos estáticos a la variable que usa el HTML
    this.educacion = educacionS;
  }

  delete(id?: number) {
    if (id != undefined) {
      this.educacionS.delete(id).subscribe(
        (data) => {
          this.cargarEducacion();
        },
        (err) => {
          alert('no se pudo eliminar educacion');
        },
      );
    }
  }
}
