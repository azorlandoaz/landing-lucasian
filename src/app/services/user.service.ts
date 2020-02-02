import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

@Injectable({
    providedIn: 'root',
  })
export class UserService {
    configUrl: string = 'http://jsonplaceholder.typicode.com/users';
    allUsers: User[] = [];
    
    constructor(private http: HttpClient) { }

     getUsers() {
       return this.http.get(this.configUrl);
    }
}