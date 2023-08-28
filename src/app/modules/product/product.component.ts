import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductInterface } from 'src/app/models/product.interface';
import { getProductsAction } from 'src/app/state/product.actions';
import { getProducts } from 'src/app/state/product.selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  //método1
  products: ProductInterface[] = [];
  //método2
  products$: Observable<ProductInterface[]> | undefined;

  constructor(
    private store: Store //llamando al servicio directamente //private productService: ProductService
  ) {}

  ngOnInit(): void {
    //llamando al servicio con NgJs
    this.store.dispatch(getProductsAction());
    //método1, con este método habría que crear el unsubscribe para no provocar memory leaks
    this.store.select(getProducts).subscribe((data) => {
      console.log(data);
      this.products = data;
    });
    //método2
    this.products$ = this.store.select(getProducts);

    //llamando al servicio directamente
    // this.productService.getProducts().subscribe({
    //   next: (productResponse: ProductResponse) => {
    //     this.products = productResponse.products;
    //     console.log(productResponse);
    //   },
    //   error: (error: HttpErrorResponse) => {
    //     console.log(error);
    //   },
    //   complete: () => {
    //     // Handle the completion
    //   },
    // });
  }
}
