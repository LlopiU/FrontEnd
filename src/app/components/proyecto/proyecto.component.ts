import { TokenService } from 'src/app/service/token.service';
import { ProyectoService } from './../../service/proyecto.service';
import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css'],
})
export class ProyectoComponent implements OnInit {
  proy: Proyecto[] = [];
  constructor(
    private sProyecto: ProyectoService,
    private tokenService: TokenService,
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    // this.sProyecto.lista().subscribe(data => {this.proy = data;}
    // )

    const sProyecto: Proyecto[] = [
      {
        id: 0,
        nombreP: 'Portafolio Personal React.js',
        descripcionP:
          'Desarrollo de un portafolio personal con React.js para mostrar mis proyectos y habilidades en distintas tecnologías.(en desarrollo)',
        imgP: 'assets/reactpage.png',
        urlP: 'https://app-react-proyecto.vercel.app/',
      },
      {
        id: 1,
        nombreP: 'Desarrollo Web Next.js',
        descripcionP:
          'Desarrollo de una pagina web con Next.js y React para el centro de estudiantes de mi facultad.',
        imgP: 'assets/pagina CET.png',
        urlP: 'https://tpi-frontend.vercel.app/',
      },
      {
        id: 2,
        nombreP: 'App Mobile FlySport',
        descripcionP:
          'Estoy realizando una app mobile en react-native con expo para gestion de canchas deportivas',
        imgP: 'assets/appflysport.png',
      },
      {
        id: 5,
        nombreP: 'App de Telemedicina',
        descripcionP:
          'TelMed: aplicación de telemedicina (React Native 0.81.4 + expo)',
        imgP: 'assets/apptelmed.png',
      },
      {
        id: 3,
        nombreP: 'Pasarela de Pagos',
        descripcionP:
          'Actualmente estoy trabajando en Wee!: Pasarela de pagos (Vue + vuetify 2). En TelCo SAPEM',
      },
      {
        id: 4,
        nombreP: 'Ticketera de eventos en Corrientes',
        descripcionP:
          'Weepass!: Venta de entradas para distintos eventos (Vue + vuetify 3). En TelCo SAPEM ',
      },

      {
        id: 6,
        nombreP: 'App de Recolección de residuos',
        descripcionP:
          'Recolector: aplicación que facilita la recolección de residuos en la ciudad (react native 81.4)',
      },
      {
        id: 7,
        nombreP: 'Migracion de proyecto laravel',
        descripcionP:
          'DoCo: plataforma de gestión de expedientes. (Migración de Laravel a Vue). En TelCo SAPEM',
      },
      {
        id: 8,
        nombreP: 'Portafolio Personal Next.js',
        descripcionP:
          'Desarrollo de un portafolio personal con Next.js para mostrar mis proyectos y habilidades en distintas tecnologías.(en proceso de desarrollo)',
      },
    ];

    // Asignamos directamente los datos estáticos a la variable que usa el HTML
    this.proy = sProyecto;
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sProyecto.delete(id).subscribe(
        (data) => {
          this.cargarProyecto();
        },
        (err) => {
          alert('No se pudo borrar el Proyecto');
        },
      );
    }
  }
}
