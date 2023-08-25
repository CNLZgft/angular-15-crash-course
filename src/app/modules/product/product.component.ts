import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  ProductInterface,
  ProductResponse,
} from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: ProductInterface[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (productResponse: ProductResponse) => {
        this.products = productResponse.products;

        console.log(productResponse);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
      complete: () => {
        // Handle the completion
      },
    });
  }
}
