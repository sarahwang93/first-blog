import { createAction, props } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import { Product } from '../product.model';
import { ProductComponent } from '../product.component';

export const getProductAction = createAction(
    '[Product] Get Product', 
    props<{ id: number }>()
  ); // Action Creator

export const addProductAction = createAction(
  '[Product] Add Product',
    props<Product>()
);