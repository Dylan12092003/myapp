import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm!: FormGroup;
  registerMessage: any;
  validation_messages = {
    'email': [
      { type: 'required', message: 'El correo electrónico es obligatorio.' },
      { type: 'pattern', message: 'Ingrese una dirección de correo electrónico válida.' },
      { type: 'maxlength', message: 'El correo electrónico no puede tener más de 50 caracteres.' },
      { type: 'minlength', message: 'El correo electrónico debe tener al menos 5 caracteres.' }
    ],
    'password': [
      { type: 'required', message: 'La contraseña es obligatoria.' },
      { type: 'maxlength', message: 'La contraseña no puede tener más de 10 caracteres.' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 5 caracteres.' }
    ],
    'confirmPassword': [
      { type: 'required', message: 'La confirmación de la contraseña es obligatoria.' }
    ],
    'name': [
      { type: 'required', message: 'El nombre es obligatorio.' },
      { type: 'maxlength', message: 'El nombre no puede tener más de 50 caracteres.' },
      { type: 'minlength', message: 'El nombre debe tener al menos 2 caracteres.' }
    ],
    'last_name': [
      { type: 'required', message: 'El apellido es obligatorio.' },
      { type: 'maxlength', message: 'El apellido no puede tener más de 50 caracteres.' },
      { type: 'minlength', message: 'El apellido debe tener al menos 2 caracteres.' }
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private storage: Storage,
    private navCtrl: NavController
  ) {
    this.initForm();
  }

  async initForm() {
    // Inicializa el servicio Storage de forma asincrónica
    await this.storage.create();

    this.registerForm = this.formBuilder.group({
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
      confirmPassword: new FormControl(
        "",
        Validators.compose([
          Validators.required,
        ])
      ),
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(2)
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(2)
        ])
      )
    });
  }

  ngOnInit() {
  }

  register(register_data: any) {
    console.log(register_data);
    this.authservice.loginUser(register_data).then(res => {
      this.registerMessage = res;
      this.navCtrl.navigateForward('/login');
    }).catch(err => {
      this.registerMessage = err;
    });
  }
}

