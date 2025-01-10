import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root',
})

export class LoginService extends BaseService {

    private url = 'Funcionario';
    private urlADM = 'Administrador';

    constructor(private http: HttpClient) { super() }

    logarFuncionario(usuario: any): Observable<LoginModel> {
        return this.http.post<LoginModel>(this.Basepath() + this.url + "/LogarFuncionario", usuario);
    }

    logarADM(administrador: any): Observable<LoginModel> {
        return this.http.post<LoginModel>(this.Basepath() + this.urlADM + "/LogarAdministrador", administrador);
    }
}

