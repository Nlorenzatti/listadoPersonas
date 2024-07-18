import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "./persona.model";
import { LoginService } from "./login.service";

@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient,
                private loginService: LoginService){}
    
    cargarPersonas(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://listado-personas-cb359-default-rtdb.firebaseio.com/datos.json?auth=' + token)
    }

    guardarPersonas(personas:Persona[]){
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://listado-personas-cb359-default-rtdb.firebaseio.com/datos.json?auth=' + token,personas)
        .subscribe(
            response => {
                console.log('Resultado de guardar personas: ' + response);
            error => console.log('Error al guardar personas: '+ error)
            }    
        )    
    }

    modificarPersona(index: number, persona:Persona){
        let url:string;
        const token = this.loginService.getIdToken();
        url='https://listado-personas-cb359-default-rtdb.firebaseio.com/datos/'+ index + '.json?auth='+ token;
        this.httpClient.put(url,persona)
            .subscribe(
                response => console.log("resultado de modificar Persona: " + response)
            ,   error => console.log("Error de modificar persona: " + error)
            )   
    }

    eliminarPersona(index:number){
        const token = this.loginService.getIdToken();
        let url:string;
        url='https://listado-personas-cb359-default-rtdb.firebaseio.com/datos/'+ index + '.json?auth='+ token;
        this.httpClient.delete(url)
            .subscribe(
                response => console.log("resultado de eliminar Persona: " + response)
            ,   error => console.log("Error de eliminar persona: " + error)
            )   
    }
    

}