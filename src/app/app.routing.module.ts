import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    //component: HomeComponent,
    redirectTo: 'home',
    pathMatch: 'full',
  },
  //normal routing if only the app module exists
  // {
  //   path: 'home',
  //   component: HomeComponent,
  // },
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  // },
  // {
  //   path: 'product',
  //   component: ProductComponent,
  // },
  //routing with lazyloading, needs to be done with a  promise
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then(
        (module) => module.ProfileModule
      ),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./modules/product/product.module').then(
        (module) => module.ProductModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
