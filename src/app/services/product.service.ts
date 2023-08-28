import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductResponse } from '../models/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  private readonly apiUrl = environment.apiUrl;

  getProducts(): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(this.apiUrl + '/products');
  }
}
