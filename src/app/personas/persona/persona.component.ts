import { Component, Input } from '@angular/core';
import { PersonasService } from '../../personas.service';
import { Persona } from '../../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.scss'
})
export class PersonaComponent {
  @Input() persona:Persona;
  @Input() indice:number;

  constructor(private personasService:PersonasService){}

  emitirSaludo(){
    this.personasService.saludar.emit(this.indice);
  }

}
