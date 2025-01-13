import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { HttpResponse, NotificacaoErro } from '../../models/notificacaoErro.model';
import { LoginModel } from '../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;
  verificaLogin: boolean = false;
  mensagemErro: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
      senha: ['', [Validators.required, Validators.minLength(5)]],
      cargo: ['', [Validators.required, Validators.minLength(5)]]
    });

  }

  get email() {
    return this.loginForm.get('email');
  }

  get senha() {
    return this.loginForm.get('senha');
  }

  loginFuncionario(funcionario: any) {
    this.loginService.logarFuncionario(funcionario).subscribe({
      next: (res: LoginModel) => {
        this.verificaLogin = true;
        localStorage.setItem("Token", res.accessToken);

        //setTimeout(() => {
        // this.router.navigate(['/home']);
        //}, 2000);
      },
      error: (err) => {
        console.error("Erro ao logar Funcionário: ", err);
        console.log(err);
      }
    });
  }

  loginADM(administrador: any) {
    this.loginService.logarADM(administrador).subscribe({
      next: (res: LoginModel) => {
        this.verificaLogin = true;
        this.mensagemErro = res.message;
        localStorage.setItem("Token_ADM", res.accessToken);
        setTimeout(() => {
          this.router.navigate(['/lista-funcionarios']);
        }, 2000);
      },
      error: (err: HttpResponse) => {
        this.mensagemErro = err.error.mensagem;
      }
    });
  }


  onSubmit() {
    if (this.loginForm.valid) {
      const usuario = {
        Email: this.loginForm.value.email,
        Senha: this.loginForm.value.senha,
        Cargo: this.loginForm.value.cargo
      }

      if (usuario.Cargo == "administrador") {
        this.loginADM(usuario);
      }
      else if (usuario.Cargo == "funcionario") {
        this.loginFuncionario(usuario);
      }


    }
    else {
      console.log("invalido");
    }
  }

}
