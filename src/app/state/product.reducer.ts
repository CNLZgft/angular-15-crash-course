import { createReducer, on } from '@ngrx/store';
import { ProductInterface } from '../models/product.interface';
import { getProductsFail, getProductsSuccess } from './product.actions';

export const productFeatureKey = 'product';

export interface ProductState {
  products: ProductInterface[];
  error?: string;
}

export const initialState: ProductState = {
  products: [],
  error: undefined,
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(getProductsSuccess, (state, action) => ({
    ...state,
    products: action.response.products,
  })),
  on(getProductsFail, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
