import { create } from 'domain';
import { Product } from '../product.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { initProductState } from './products.state';

export const selectProductFeature =  (state: typeof initProductState) => state.productLst;

export const selectCountProducts = createSelector(
    selectProductFeature,
    (state) => {
        return state.length
    }
)

export const selectTotalPrice = createSelector(
    selectProductFeature,
    (state) => {
        var totalPrice = 10;
        state.forEach(p => totalPrice + p.price)
        return totalPrice;
    }
)