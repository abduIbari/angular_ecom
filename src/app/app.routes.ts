import { Routes } from '@angular/router';
import { ProductsList } from './pages/products-list/products-list.component';
import { Cart } from './pages/cart/cart.component';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: ProductsList
},
{
    path:'cart',
    component: Cart
}

];
