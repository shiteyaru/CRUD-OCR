import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class BaseService {

    constructor() { }

    Basepath() {
        return (
            // 'http://192.168.70.50:5094/api/'
            //    window.location.protocol +
            //  '//' +
            //  window.location.hostname +
            //  (window.location.protocol === 'https:7185') +
            //   '/api/'
            'https://192.168.70.161:7276/api/'
        );
    }
}
