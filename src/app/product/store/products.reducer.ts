import { Product } from '../product.model';
import * as ProductionActions from './products.actions';
import { getProductAction, addProductAction } from './products.actions';
import { createFeature, createReducer, on, Action } from '@ngrx/store';
import { initProductState, ProductState } from './products.state';


const productReducer = createReducer(
    initProductState, 
    on(getProductAction, (state) => {
        return {
            ...state
        }
    }),

    on(addProductAction, (state, action) => {
        const newProduct: Product = { userId: 1, id: Math.random(), title: "", body:"", price: 10}
        state.productLst.push(newProduct)
        return {
            ...state,
            productLst: state.productLst
        }
    })
)

export const productFeature = createFeature({
    name: "productEntries",
    reducer: productReducer
});

export function reducer(state: ProductState=initProductState, action: Action) {
    console.log('state', state);
    console.log('action', action);
    return productReducer(state, action);
}