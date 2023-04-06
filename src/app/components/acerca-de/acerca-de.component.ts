import { TokenService } from './../../service/token.service';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = null;

  constructor(public personaService: PersonaService,private TokenService:TokenService){ }
  isLogged=true;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.TokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarPersona(): void {
    this.personaService.detail(1).subscribe(data => {this.persona = data})
  }
}
