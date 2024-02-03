import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginform: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "El Email es obligatorio." },
      { type: "pattern", message: "El Email ingresado no es válido." }
    ],
    password: [
      { type: "required", message: "La contraseña es obligatoria." },
      { type: "maxlength", message: "La contraseña no puede tener más de 10 caracteres." },
      { type: "minlength", message: "La contraseña debe tener al menos 5 caracteres." }
    ]
  };
  loginMessage: any;
  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private navCtrl: NavController
    ) {
    this.loginform = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          ),
          Validators.maxLength(50),
          Validators.minLength(5)
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(5)
        ])
      ),
    });
  }

  ngOnInit() {}

  login(login_data: any) {
    console.log(login_data);
    this.authservice.loginUser(login_data).then( res =>{
      this.loginMessage = res;
      this.navCtrl.navigateForward('menu/home')
    }).catch (err => {
      this.loginMessage = err;
    })
  }
}
