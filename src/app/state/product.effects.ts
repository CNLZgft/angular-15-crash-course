import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getProductsAction,
  getProductsFail,
  getProductsSuccess,
} from './product.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProductService } from '../services/product.service';
import { ProductResponse } from '../models/product.interface';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProductsAction),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      switchMap((action) => {
        return this.productService.getProducts().pipe(
          map((response: ProductResponse) => getProductsSuccess({ response })),
          catchError((error) =>
            of(getProductsFail({ error: error.toString() }))
          )
        );
      })
    )
  );
}
