import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.scss'
})
export class PersonasComponent implements OnInit{

  personas: Persona[] = [];
  
  constructor(
    private personasService:PersonasService,
    private router: Router
    ){}

  ngOnInit(): void{
    this.personasService.obtenerPersonas()
    .subscribe(
      (personas: Persona[]) => {
        this.personas = personas;
        this.personasService.setPersonas(personas);
      }
    );
  }

  agregar(){
    this.router.navigate(['personas/agregar']);
  }
}
