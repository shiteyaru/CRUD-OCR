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

    private url = 'funcionario';

    constructor(private http: HttpClient) { super() }

    getAll(): Observable<FuncionarioModel[]> {
        return this.http.get<FuncionarioModel[]>(this.Basepath() + this.url + '/buscartodosfuncionarios', {
            headers: new HttpHeaders({
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW5kcmV5QGdtYWlsLmNvbSIsImp0aSI6IjMxOGFhY2I2LTUyMTQtNDg4NS1hNTI0LWU2NTNiMDNhOTI5OCIsImVtYWlsIjpbImFuZHJleUBnbWFpbC5jb20iLCJhbmRyZXlAZ21haWwuY29tIl0sIm5iZiI6MTczNjM1NjY2NCwiZXhwIjoxNzM2MzYzODY0LCJpYXQiOjE3MzYzNTY2NjQsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODEwMCIsImF1ZCI6IkV4ZW1wbG9BdWRpZW5jZSJ9.ucgI8Awf84EH813e6Nhyc7q6g-RpKqGjAaMt9liqIMQ`
            })
        });
    }

}

