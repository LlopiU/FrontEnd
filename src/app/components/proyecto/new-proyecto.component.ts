import { Proyecto } from 'src/app/model/proyecto';
import { Router, ActivatedRoute } from '@angular/router';
import { ProyectoService } from './../../service/proyecto.service';
import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombreP: string;
  descripcionP: string;
  imgP: string;

  constructor(private sProyecto: ProyectoService, private router : Router, private activatedRouter: ActivatedRoute, public imageService: ImageService) { }

  ngOnInit(): void {
  }

  onCreate():void{
  const proy = new Proyecto(this.nombreP, this.descripcionP, this.imgP);
  this.sProyecto.save(proy).subscribe(
    data =>{
      alert("Proyecto añadida");
      this.router.navigate(['']);
}, err=>{
  alert("fallo");
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
