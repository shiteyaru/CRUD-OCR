import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { FuncionarioModel } from 'src/app/models/funcionario.model';
import { ListaFuncionariosService } from 'src/app/services/lista-funcionarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonAlert, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.page.html',
  styleUrls: ['./lista-funcionarios.page.scss'],
  standalone: false
})
export class ListaFuncionariosPage implements OnInit {

  editando: boolean = false;
  funcionarios: FuncionarioModel[] = [

    { id: 1, cpf: "12345678901", nome: "João Silva", email: "joao.silva@email.com", senha: "senha123" },
    { id: 2, cpf: "98765432100", nome: "Maria Oliveira", email: "maria.oliveira@email.com", senha: "senha456" },
    { id: 3, cpf: "11122334455", nome: "Carlos Souza", email: "carlos.souza@email.com", senha: "senha789" },
    { id: 4, cpf: "22233445566", nome: "Ana Costa", email: "ana.costa@email.com", senha: "senha101" },
    { id: 5, cpf: "33344556677", nome: "Ricardo Pereira", email: "ricardo.pereira@email.com", senha: "senha102" },
    { id: 6, cpf: "44455667788", nome: "Beatriz Lima", email: "beatriz.lima@email.com", senha: "senha103" },
    { id: 7, cpf: "55566778899", nome: "Paulo Fernandes", email: "paulo.fernandes@email.com", senha: "senha104" },
    { id: 8, cpf: "66677889900", nome: "Luana Rocha", email: "luana.rocha@email.com", senha: "senha105" },
    { id: 9, cpf: "77788990011", nome: "Fábio Costa", email: "fabio.costa@email.com", senha: "senha106" },
    { id: 10, cpf: "88899001122", nome: "Mariana Alves", email: "mariana.alves@email.com", senha: "senha107" },
    { id: 11, cpf: "99900112233", nome: "Gustavo Martins", email: "gustavo.martins@email.com", senha: "senha108" },
    { id: 12, cpf: "10111223344", nome: "Juliana Pereira", email: "juliana.pereira@email.com", senha: "senha109" },
    { id: 13, cpf: "12131444556", nome: "Thiago Almeida", email: "thiago.almeida@email.com", senha: "senha110" },
    { id: 14, cpf: "13141555667", nome: "Gabriela Silva", email: "gabriela.silva@email.com", senha: "senha111" },
    { id: 15, cpf: "14151666778", nome: "Lucas Rodrigues", email: "lucas.rodrigues@email.com", senha: "senha112" },
    { id: 16, cpf: "15161777889", nome: "Carla Souza", email: "carla.souza@email.com", senha: "senha113" },
    { id: 17, cpf: "16171888990", nome: "Ricardo Alves", email: "ricardo.alves@email.com", senha: "senha114" },
    { id: 18, cpf: "17181999001", nome: "Eliane Santos", email: "eliane.santos@email.com", senha: "senha115" },
    { id: 19, cpf: "18192000112", nome: "Vitor Costa", email: "vitor.costa@email.com", senha: "senha116" },
    { id: 20, cpf: "19202111223", nome: "Patrícia Pereira", email: "patricia.pereira@email.com", senha: "senha117" }
  ];
  formBool: boolean = false;
  editarForm!: FormGroup;
  idFuncionario: number = 0;

  constructor(
    private listaFuncionarios: ListaFuncionariosService,
    private formBuilder: FormBuilder,

  ) { }


  ngOnInit() {

    this.listarTodosFuncionarios();

  }

  listarTodosFuncionarios() {
    this.listaFuncionarios.getAll().subscribe({
      next: (res: FuncionarioModel[]) => {
        this.funcionarios = res;
      },
      error: (err) => {
        console.error("Erro no getAll: ", err);
      }
    }
    );
  }

  addUsuario() {
    this.editando = false;
    this.abrirForm({ id: 0, nome: '', cpf: '', email: '', senha: '' } as FuncionarioModel);
  }

  abrirForm(funcionario: FuncionarioModel) {

    this.editarForm = this.formBuilder.group({
      cpf: ['', [Validators.required, Validators.minLength(5)]],
      nome: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
      senha: ['', [Validators.required, Validators.minLength(5)]],
    });

    this.formBool = true;
    this.idFuncionario = funcionario.id;
    this.editando = funcionario.id > 0;
    this.editarForm.patchValue({
      cpf: funcionario.cpf,
      nome: funcionario.nome,
      email: funcionario.email,
    });
  }

  fecharForm(): void {
    const formElement = document.querySelector('.display-form');
    if (formElement) {
      formElement.classList.add('zoomOut');
      setTimeout(() => {
        this.formBool = false;
      }, 200);
    } else {
      this.formBool = false;
    }
  }

  cadastrarFuncionario(funcionario: FuncionarioModel) {
    this.listaFuncionarios.cadastrarFuncionario(funcionario).subscribe({
      next: (res: FuncionarioModel) => {
        this.fecharForm();

        setTimeout(() => {
          this.listarTodosFuncionarios();
        }, 200);

      },
      error: (err) => {
        console.error("Erro ao cadastrar Funcionário: ", err);
      }
    })
  }

  atualizarFuncionario(funcionario: FuncionarioModel) {
    this.listaFuncionarios.updateFuncionario(funcionario.id, funcionario).subscribe({
      next: (res: FuncionarioModel) => {
        this.fecharForm();

        setTimeout(() => {
          this.listarTodosFuncionarios();
        }, 200);

      },
      error: (err) => {
        console.error("Erro ao atualizar Funcionário: ", err);
      }
    })
  }

  deletarFuncionario(funcionario: FuncionarioModel) {
    this.listaFuncionarios.deletarFuncionario(funcionario.id).subscribe({
      next: (res: FuncionarioModel) => {
        this.listarTodosFuncionarios();
      },
      error: (err) => {
        console.error("Erro ao deletar Funcionário: ", err);
      }
    })
  }

  onSubmit() {
    if (this.editarForm.valid) {

      const funcionario = {
        id: this.idFuncionario,
        cpf: this.editarForm.value.cpf,
        nome: this.editarForm.value.nome,
        email: this.editarForm.value.email,
        senha: this.editarForm.value.senha
      }

      if (this.editando) {
        this.atualizarFuncionario(funcionario);
      }
      else {
        this.cadastrarFuncionario(funcionario);
      }
    }
    else {
      console.log("invalido");
    }
  }
}
