import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { productFeatureKey, productReducer } from './product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './product.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(productFeatureKey, productReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  exports: [],
})
export class ProductStateModule {}
