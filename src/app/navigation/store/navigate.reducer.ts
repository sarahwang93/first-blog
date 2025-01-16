import { Navigate } from '../navigate.model';
import { initNavigateState } from './navigate.state';
import { gotoNavigateAction, addNavigateAction } from './navigate.actions';
import { createFeature, createReducer, on } from '@ngrx/store';


const newNavigate: Navigate = { tabId: 1, tabName: 'details', pageLevel: 3, pageLink: 'localhost:3000/details' }

export const navigateReducer = createReducer(
    initNavigateState, 
    on(gotoNavigateAction, (state, action) => {
        return {
            ...state,
            navigateLst: state.navigateLst
        }
    }),

    on(addNavigateAction,  (state, action) => {
        console.log(action)
        return {
            ...state,
            navigateLst: state.navigateLst.concat(newNavigate)
        }
        
    })
)

export const navigateFeature = createFeature({
    name: "navigateEntries",
    reducer: navigateReducer
})