import { TokenService } from 'src/app/service/token.service';
import { SExperienciaService } from './../../service/s-experiencia.service';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];
  constructor(
    private sExperiencia: SExperienciaService,
    private tokenService: TokenService,
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    // Datos estáticos temporales (esto se carga siempre)
    const experienciasHardcoded: Experiencia[] = [
      {
        id: 1,
        nombreE: 'Desarrollo Web Next.js',
        descripcionE:
          'Desarrollo de una pagina web con Next.js y React para el centro de estudiantes de mi facultad.',
      },
      {
        id: 2,
        nombreE: 'Pasantía IT',
        descripcionE:
          'Realice una pasantia de 3 meses en TelCo SAPEM como desarrollo web con Vue.js.',
      },
      {
        id: 3,
        nombreE: 'Full Stack Developer Jr',
        descripcionE:
          'Desarrollo de aplicaciones web utilizando el stack MEAN/MERN.',
      },
    ];

    // Asignamos directamente los datos estáticos a la variable que usa el HTML
    this.expe = experienciasHardcoded;

    // Comentamos la llamada al servidor para evitar errores en la consola
    /*
  this.sExperiencia.lista().subscribe(data => {
    this.expe = [...data, ...experienciasHardcoded];
  });
  */
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe(
        (data) => {
          this.cargarExperiencia();
        },
        (err) => {
          alert('No se pudo borrar la experienia');
        },
      );
    }
  }
}
