import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  BASE_URL = 'http://localhost:3000/';

  constructor(public http: HttpClient) { }

  // function para captar los datos del web service
  getClientByIdentification(identification: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.BASE_URL + 'client/' + identification).subscribe({
        next:       (data) => {
          resolve(data);
        },
        error: (err) => {
          console.error('Error al obtener los datos:', err);
          reject(err);
        }
      }
      );
    });
  }

}
