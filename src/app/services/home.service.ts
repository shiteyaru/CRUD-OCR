import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../pages/home/models/funcionario.model';

@Injectable({
    providedIn: 'root',
})

export class HomeService {

    private url = 'funcionario';

    constructor(private http: HttpClient) { }

    logarFuncionario(usuario: any): Observable<Funcionario> {
        return this.http.post<Funcionario>(this.url, usuario);
    }

}

