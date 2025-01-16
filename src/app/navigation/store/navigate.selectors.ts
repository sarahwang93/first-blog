import { create } from 'domain';
import { Navigate } from '../navigate.model';
import { initNavigateState } from './navigate.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectFeature = (state: typeof initNavigateState) => state.navigateLst;

export const selectCountNavigate = createSelector(
    selectFeature,
    (state) => {
        return state.length
    }
)

export const selectAllNavigate = createSelector(
    selectFeature,
    (state) => {
        var navList:string[] = [];
        state.forEach(p => navList.push(p.tabName))
        return navList;
    }
)