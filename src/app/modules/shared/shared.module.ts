import { NgModule } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

const components = [
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: [...components],

  exports: [...components],
})
export class SharedModule {}
