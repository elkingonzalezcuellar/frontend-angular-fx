import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forex } from '../models/forex.model';
import { environment } from "../../enviroments/enviroment";

@Injectable({
  providedIn: 'root',
})
export class FxrateService {
  private apiUrl = environment.apiUrlMicroservice;
  constructor(private http: HttpClient) {}
  getFxRates() {
    return this.http.get<forex[]>(this.apiUrl);
  }
  createFxRate(dto: forex) {
    return this.http.post(this.apiUrl, dto);
  }
}
