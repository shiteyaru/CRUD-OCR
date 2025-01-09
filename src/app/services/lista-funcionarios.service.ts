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
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibHVjYXNAZ21haWwuY29tIiwianRpIjoiN2Q4ZDk4NmItZTBmOS00OGViLWJjMGMtNzEwZjUyMzU2ZGM0IiwiZW1haWwiOlsibHVjYXNAZ21haWwuY29tIiwibHVjYXNAZ21haWwuY29tIl0sIm5iZiI6MTczNjQzOTM2MywiZXhwIjoxNzM2NDQ2NTYzLCJpYXQiOjE3MzY0MzkzNjMsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODEwMCIsImF1ZCI6IkV4ZW1wbG9BdWRpZW5jZSJ9.QUcI-JX_2lKXi5fIlsHqFEr9J_VYARYT8c0b2SVqrk8`
            })
        });
    }

    updateFuncionario(id: number, funcionario: FuncionarioModel): Observable<FuncionarioModel> {
        return this.http.put<FuncionarioModel>(
            `${this.Basepath()}${this.url}/AtualizarFuncionario${id}`, funcionario, {
            headers: new HttpHeaders({
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibHVjYXNAZ21haWwuY29tIiwianRpIjoiN2Q4ZDk4NmItZTBmOS00OGViLWJjMGMtNzEwZjUyMzU2ZGM0IiwiZW1haWwiOlsibHVjYXNAZ21haWwuY29tIiwibHVjYXNAZ21haWwuY29tIl0sIm5iZiI6MTczNjQzOTM2MywiZXhwIjoxNzM2NDQ2NTYzLCJpYXQiOjE3MzY0MzkzNjMsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODEwMCIsImF1ZCI6IkV4ZW1wbG9BdWRpZW5jZSJ9.QUcI-JX_2lKXi5fIlsHqFEr9J_VYARYT8c0b2SVqrk8`
            })
        });
    }

    deletarFuncionario(id: number): Observable<FuncionarioModel> {
        return this.http.delete<FuncionarioModel>(
            `${this.Basepath()}${this.url}/DeletarFuncionario${id}`, {
            headers: new HttpHeaders({
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibHVjYXNAZ21haWwuY29tIiwianRpIjoiN2Q4ZDk4NmItZTBmOS00OGViLWJjMGMtNzEwZjUyMzU2ZGM0IiwiZW1haWwiOlsibHVjYXNAZ21haWwuY29tIiwibHVjYXNAZ21haWwuY29tIl0sIm5iZiI6MTczNjQzOTM2MywiZXhwIjoxNzM2NDQ2NTYzLCJpYXQiOjE3MzY0MzkzNjMsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODEwMCIsImF1ZCI6IkV4ZW1wbG9BdWRpZW5jZSJ9.QUcI-JX_2lKXi5fIlsHqFEr9J_VYARYT8c0b2SVqrk8`
            })
        });
    }

}

