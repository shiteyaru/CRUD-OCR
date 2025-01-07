import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../pages/home/models/funcionario.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})

export class HomeService {

    private url = 'https://192.168.70.161:7023/api/funcionario/logarfuncionario';
    private urlteste = 'https://192.168.70.161:7023/api/funcionario/buscartodosfuncionarios';

    constructor(private http: HttpClient) { }

    logarFuncionario(usuario: any): Observable<Funcionario> {
        return this.http.post<Funcionario>(this.url, usuario);
    }

    getAll(): Observable<Funcionario> {
        return this.http.get<Funcionario>(this.urlteste);
    }
}

