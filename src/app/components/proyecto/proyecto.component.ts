import { TokenService } from 'src/app/service/token.service';
import { ProyectoService } from './../../service/proyecto.service';
import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proy: Proyecto[] = [];
  constructor(private sProyecto: ProyectoService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto():void{
    this.sProyecto.lista().subscribe(data => {this.proy = data;}
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.sProyecto.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err =>{
          alert("No se pudo borrar el Proyecto");
        }
      )
    }
  }
}
