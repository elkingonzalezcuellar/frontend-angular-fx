import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { exchange } from '../models/exchange.model';
import {environment} from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  private apiUrl =
    environment.apiUrl;
  constructor(private http: HttpClient) {}
  getExchange() {
    return this.http.get<exchange>(this.apiUrl);
  }
}
