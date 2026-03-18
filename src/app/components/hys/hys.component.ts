import { TokenService } from 'src/app/service/token.service';
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css'],
})
export class HysComponent implements OnInit {
  skill: Skill[] = [];

  constructor(
    private skillS: SkillService,
    private tokenService: TokenService,
  ) {}
  isLogged = false;
  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    // this.skillS.lista().subscribe(
    //   data=> {
    //     this.skill = data;
    //   }
    // )

    const skillS: Skill[] = [
      {
        id: 1,
        nombre: 'Vue.js',
        porcentaje: 80,
      },
      {
        id: 2,
        nombre: 'React.js',
        porcentaje: 60,
      },
      {
        id: 3,
        nombre: 'Next.js',
        porcentaje: 60,
      },
      {
        id: 13,
        nombre: 'Java',
        porcentaje: 50,
      },
      {
        id: 14,
        nombre: 'Node.js',
        porcentaje: 70,
      },
      {
        id: 4,
        nombre: 'TypeScript',
        porcentaje: 60,
      },
      {
        id: 5,
        nombre: 'JavaScript',
        porcentaje: 80,
      },
      {
        id: 6,
        nombre: 'Golang',
        porcentaje: 30,
      },
      {
        id: 7,
        nombre: 'Laravel',
        porcentaje: 40,
      },
      {
        id: 8,
        nombre: 'Tailwind CSS',
        porcentaje: 80,
      },
      {
        id: 9,
        nombre: 'Bootstrap',
        porcentaje: 70,
      },
      {
        id: 10,
        nombre: 'PrimeVue',
        porcentaje: 80,
      },
      {
        id: 11,
        nombre: 'Ingles',
        porcentaje: 50,
      },
      {
        id: 12,
        nombre: 'GitHub',
        porcentaje: 70,
      },
    ];

    // Asignamos directamente los datos estáticos a la variable que usa el HTML
    this.skill = skillS;
  }
  delete(id: number) {
    if (id != undefined) {
      this.skillS.delete(id).subscribe(
        (data) => {
          this.cargarSkills();
        },
        (err) => {
          alert('no se puede borrar la skill');
        },
      );
    }
  }
}
