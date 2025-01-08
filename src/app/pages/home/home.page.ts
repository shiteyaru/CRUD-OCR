import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private homeService: HomeService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
      senha: ['', [Validators.required, Validators.minLength(5)]]
    });

    //teste
    this.homeService.getAll().subscribe({
      next: (response: any) => {
        console.log("get all realizado com sucesso!");
        console.log(response);
      },
      error: (err) => {
        console.error("erro get all: ", err);
      }
    }
    )

  }

  get email() {
    return this.loginForm.get('email');
  }

  get senha() {
    return this.loginForm.get('senha');
  }

  verificaEmail(){
    const emailControl = this.loginForm.get("email");
    emailControl?.markAsTouched();
  }

  verificaSenha(){
    const senhaControl = this.loginForm.get("senha");
    senhaControl?.markAsTouched();
  }


  onSubmit() {
    if (this.loginForm.valid) {
      const funcionario = {
        Email: this.loginForm.value.email,
        Senha: this.loginForm.value.senha
      }


      this.homeService.logarFuncionario(funcionario).subscribe({
        next: (response: any) => {
          console.log("Funcionário logado com sucesso!");
        },
        error: (err) => {
          console.error("Erro ao logar Funcionário: ", err);
        }
      }
      )


    }
    else {
      console.log("invalido");
    }
  }

}
