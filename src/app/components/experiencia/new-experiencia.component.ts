import { Experiencia } from './../../model/experiencia';
import { Router } from '@angular/router';
import { SExperienciaService } from './../../service/s-experiencia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router : Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
  const expe = new Experiencia(this.nombreE, this.descripcionE);
  this.sExperiencia.save(expe).subscribe(
    data =>{
      alert("Experiencia añadida");
      this.router.navigate(['']);
}, err=>{
  alert("fallo");
  this.router.navigate(['']);
}
)
  }

}
