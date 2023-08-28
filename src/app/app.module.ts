import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './modules/home/home.module';
import { ProductModule } from './modules/product/product.module';
import { ProfileModule } from './modules/profile/profile.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  //al mover la declaración de los componentes "homeComponent, productComponent..." a sus respectivos módulos, hay que declarar los módulos necesarios en su propio "module"
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    //al tener los componentes sus propios modulos, hay que declararlos en el "app.module"
    HomeModule,
    ProductModule,
    ProfileModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),

    //no es necesario porque se han creado los "modules" para cada componente. En  este caso el módulo se pasa al "homeModule, productModule..." o el que toque
    //SharedModule,
    //MatCardModule,
    //MatButtonModule,
    //MatFormFieldModule,
    //MatInputModule,
    //FormsModule,
    //ReactiveFormsModule,
    //NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
