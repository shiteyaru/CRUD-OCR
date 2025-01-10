import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionarioModel } from '../models/funcionario.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root',
})

export class ListaFuncionariosService extends BaseService {

    private url = 'Administrador';

    constructor(private http: HttpClient) { super() }

    getAll(): Observable<FuncionarioModel[]> {
        return this.http.get<FuncionarioModel[]>(this.Basepath() + this.url + '/BuscarTodosFuncionarios', {
            headers: new HttpHeaders({
                Authorization: `Bearer ${localStorage.getItem("Token_ADM")}`
            })
        });
    }

    cadastrarFuncionario(funcionario: any): Observable<FuncionarioModel> {
        return this.http.post<FuncionarioModel>(this.Basepath() + this.url + '/CadastrarFuncionario', funcionario);
    }

    updateFuncionario(id: number, funcionario: FuncionarioModel): Observable<FuncionarioModel> {
        return this.http.put<FuncionarioModel>(
            `${this.Basepath()}${this.url}/AtualizarFuncionario${id}`, funcionario, {
            headers: new HttpHeaders({
                Authorization: `Bearer ${localStorage.getItem("Token_ADM")}`
            })
        });
    }

    deletarFuncionario(id: number): Observable<FuncionarioModel> {
        return this.http.delete<FuncionarioModel>(
            `${this.Basepath()}${this.url}/DeletarFuncionario${id}`, {
            headers: new HttpHeaders({
                Authorization: `Bearer ${localStorage.getItem("Token_ADM")}`
            })
        });
    }

}

