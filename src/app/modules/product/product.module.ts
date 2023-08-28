import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProductComponent } from './product.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductStateModule } from 'src/app/state/product-state.module';

@NgModule({
  declarations: [ProductComponent],
  exports: [],
  imports: [
    CommonModule,
    MatCardModule,
    NgOptimizedImage,
    SharedModule,
    ProductRoutingModule,
    ProductStateModule,
  ],
})
export class ProductModule {}
