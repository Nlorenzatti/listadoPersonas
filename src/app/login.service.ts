import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Injectable()
export class LoginService{

    token:string;

    constructor(private router:Router){}

    login(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email,password).
            then(
                response => {
                    firebase.auth().currentUser.getIdToken().then(
                        token =>{
                            this.token = token;
                            this.router.navigate(['/']);
                        }
                    )
                }
            )
            

    }
    
    //Regresa el token que recuperamos
    getIdToken(){
        return this.token;
    }
    
    isAutenticado(){
        return this.token != null;
    }


    //signOut para salir, nos regresa una promesa sin parametros, asignamos el token= null, y hacemos navegacion a la pagina principal login
    logout(){
        firebase.auth().signOut().then(()=>{
            this.token = null;
            this.router.navigate(['login']);
        }).catch(error => console.log("eroor logout: " + error));
    }

}