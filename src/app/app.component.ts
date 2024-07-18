import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  constructor(
      private loginService: LoginService
  ) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyBKnTwGByCgMutmDNEzlg7GWFSIRSDqiqU',
      authDomain: 'listado-personas-cb359.firebaseapp.com',
    });
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }

}
