import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from './../../service/educacion.service';
import { Educacion } from 'src/app/model/educacion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
educacion: Educacion = null;
  constructor(private educacionS: EducacionService, private activateRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data=>{
        this.educacion = data;
      }, err =>{
        alert(" error al modificar educacion");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void{
    const id =this.activateRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }
}
