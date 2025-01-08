import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})

export class LoginService {

    private url = 'https://192.168.70.161:7023/api/funcionario/logarfuncionario';
    private urlteste = 'https://192.168.70.161:7023/api/funcionario/buscartodosfuncionarios';

    constructor(private http: HttpClient) { }

    logarFuncionario(usuario: any): Observable<LoginModel> {
        return this.http.post<LoginModel>(this.url, usuario);
    }

    /*  
    URL DO GET ALL FUNCIONARIO
    private urlteste = 'https://192.168.70.161:7023/api/funcionario/buscartodosfuncionarios';

    ASSINATURA DO MÉTODO GET ALL
    getAll(): Observable<Funcionario> {
    return this.http.get<Funcionario>(this.urlteste);
    }
    */
}

