import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FuncionarioModel } from 'src/app/models/funcionario.model';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: false
})
export class CadastroPage implements OnInit {

  verificaCadastro: boolean = false;
  cadastroForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(5)]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
      senha: ['', [Validators.required, Validators.minLength(5)]],
      confirmarsenha: ['', [Validators.required, Validators.minLength(5)]]
    }, {
      validators: this.senhasIguais()
    });
  }

  senhasIguais(): Validators {
    return (formGroup: FormGroup) => {
      const senha = formGroup.get('senha');
      const confirmarsenha = formGroup.get('confirmarsenha');

      if (senha?.value !== confirmarsenha?.value) {
        confirmarsenha?.setErrors({ senhasNaoCoincidem: true });
      } else {
        confirmarsenha?.setErrors(null);
      }
    };
  }

  get nome() {
    return this.cadastroForm.get('nome');
  }

  get cpf() {
    return this.cadastroForm.get('cpf');
  }

  get email() {
    return this.cadastroForm.get('email');
  }

  get senha() {
    return this.cadastroForm.get('senha');
  }

  get confirmarsenha() {
    return this.cadastroForm.get('confirmarsenha');
  }

  verificaNome() {

    const nomeControl = this.cadastroForm.get("nome");
    nomeControl?.markAsTouched();

  }

  verificaCPF() {

    const nomeControl = this.cadastroForm.get("cpf");
    nomeControl?.markAsTouched();

  }

  verificaEmail() {

    const emailControl = this.cadastroForm.get("email");
    emailControl?.markAsTouched();

  }

  verificaSenha() {

    const senhaControl = this.cadastroForm.get("senha");
    senhaControl?.markAsTouched();

  }

  verificaConfirmSenha() {
    const confirmSenhaControl = this.cadastroForm.get("confirmarsenha");
    confirmSenhaControl?.markAsTouched();
    this.cadastroForm.updateValueAndValidity();
  }



  onSubmit() {
    if (this.cadastroForm.valid) {
      const funcionario = {
        Nome: this.cadastroForm.value.nome,
        Cpf: this.cadastroForm.value.cpf,
        Email: this.cadastroForm.value.email,
        Senha: this.cadastroForm.value.senha
      }


      this.cadastroService.cadastrarFuncionario(funcionario).subscribe({
        next: (res: FuncionarioModel) => {
          this.verificaCadastro = true;
          console.log(res);

          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);

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
