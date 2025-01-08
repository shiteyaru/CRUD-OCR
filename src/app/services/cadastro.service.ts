import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionarioModel } from '../models/funcionario.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root',
})

export class CadastroService extends BaseService {

    private url = 'Funcionario';


    constructor(private http: HttpClient) { super() }

    cadastrarFuncionario(funcionario: any): Observable<FuncionarioModel> {
        return this.http.post<FuncionarioModel>(this.Basepath() + this.url + '/CadastrarFuncionario', funcionario);
    }
}

