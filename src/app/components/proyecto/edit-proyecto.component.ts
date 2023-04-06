import { ImageService } from './../../service/image.service';
import { ProyectoService } from './../../service/proyecto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyect : Proyecto = null;

  constructor(private sProyecto: ProyectoService, private activatedRouter: ActivatedRoute,
    private router: Router,public imageService : ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      data=> {
        this.proyect = data;
      }, err =>{
        alert("Error al modificar Proyecto");
      this.router.navigate(['']);

      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyect.imgP = this.imageService.url;
    this.sProyecto.update(id, this.proyect).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar Proyecto");
        this.router.navigate(['']);
      }
    )
  }
  uploadImage($event : any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "Proyectos_" + id;
    this.imageService.uploadImage($event, name)
  }
}
