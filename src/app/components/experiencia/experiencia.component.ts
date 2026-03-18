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
        nombreE: 'Pasantía IT',
        descripcionE:
          'Realice una pasantia de 3 meses en TelCo SAPEM como desarrollo web con Vue.js.',
      },
      {
        id: 2,
        nombreE: 'Desarrollador Web Vue.js y Golang',
        descripcionE:
          'Trabajo actualemente en TelCo SAPEM como desarrollador web full stack utilizando como frontend Vue y como backend a golang',
      },
      {
        id: 2,
        nombreE: 'Desarrollador Mobile React Native + Expo',
        descripcionE:
          'Trabaje en TelCo SAPEM como desarrollador Mobile utilizando como tecnologia React-Native',
      },
      {
        id: 3,
        nombreE:
          'Coordinador de Comunidad y Capacitaciones en la Organización TECHO Argentina',
        descripcionE:
          'lideré equipos para la construcción efectiva y con excelencia de viviendas de emergencia en los barrios populares de la región, asimismo, coordiné capacitaciones, la gestión y organización del voluntariado.',
      },

      {
        id: 4,
        nombreE:
          'Secretario de Ingeniería en Sistemas en la UTN, Facultad Regional Resistencia',
        descripcionE:
          'colaboré en proyectos estudiantiles y de apoyo a alumnos.',
      },
      {
        id: 5,
        nombreE:
          'Tutor Universitario en la materia Algoritmos y Estructuras de Datos',
        descripcionE:
          'brindé apoyo técnico y pedagógico a estudiantes para la comprensión y aplicación de conceptos de la materia como: listas enlazadas, árboles, grafos, complejidad algorítmicas, y lideré sesiones de tutoría, talleres prácticos enfocados en la resolución de problemas y la implementación de soluciones.',
      },
      {
        id: 6,
        nombreE:
          'Investigador de la beca BAR de mi facultad (UTN, Facultad Regional Resistencia)',
        descripcionE:
          'Realice una investigacion sobre las distintas metodologias agiles para aplicarla a la enseñanza',
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
