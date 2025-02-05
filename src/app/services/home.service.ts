import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionarioModel } from '../models/funcionario.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../models/login.model';

@Injectable({
    providedIn: 'root',
})

export class HomeService {

    private url = 'https://192.168.70.161:7023/api/funcionario/logarfuncionario';
    private urlteste = 'https://192.168.70.161:7023/api/funcionario/buscartodosfuncionarios';

    constructor(private http: HttpClient) { }

    logarFuncionario(usuario: any): Observable<LoginModel> {
        return this.http.post<LoginModel>(this.url, usuario);
    }

    getAll(): Observable<FuncionarioModel> {
        return this.http.get<FuncionarioModel>(this.urlteste);
    }
}

