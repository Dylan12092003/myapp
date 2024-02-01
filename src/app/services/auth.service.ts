import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any) {
    return new Promise((accept, reject) => {
      if (credential.email === 'nunezdylan624@gmail.com' && credential.password === '0813121722') {
        accept('Login correcto');
      } else if (credential.email === 'nunezdylan624@gmail.com') {
        reject('Contraseña incorrecta');
      } else {
        reject('Login incorrecto');
      }
    });
  }
}
