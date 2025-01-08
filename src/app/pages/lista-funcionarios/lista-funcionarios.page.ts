import { Component, OnInit } from '@angular/core';
import { FuncionarioModel } from 'src/app/models/funcionario.model';
import { ListaFuncionariosService } from 'src/app/services/lista-funcionarios.service';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.page.html',
  styleUrls: ['./lista-funcionarios.page.scss'],
  standalone: false
})
export class ListaFuncionariosPage implements OnInit {

  funcionarios: FuncionarioModel[] | null = null;

  constructor(private listaFuncionarios: ListaFuncionariosService) { }

  ngOnInit() {

    this.listaFuncionarios.getAll().subscribe({
      next: (res: FuncionarioModel[]) => {
        this.funcionarios = res;
        console.log(res);
      },
      error: (err) => {
        console.error("Erro no getAll: ", err);
      }
    }

    )
  }

}


