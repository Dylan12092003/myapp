import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any) {
    return new Promise((accept, reject) => {
      if (
        (credential.email === 'nunezdylan624@gmail.com' && credential.password === '0813121722') ||
        (credential.email === 'dylannunezpenaloza400@gmail.com' && credential.password === '12345')
      ) {
        accept('Login correcto');
      } else if (credential.email === 'nunezdylan624@gmail.com' || credential.email === 'dylannunezpenaloza@gmail.com') {
        reject('Contraseña incorrecta');
      } else {
        reject('Login incorrecto');
      }
    });
  }
}

