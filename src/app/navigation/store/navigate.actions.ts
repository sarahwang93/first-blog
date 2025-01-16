import { createAction, props } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import { Navigate } from '../navigate.model';

export const gotoNavigateAction = createAction(
    '[Navigate] Goto Navigate',
    props<{tabId: number}>()
); // action creator


export const addNavigateAction = createAction(
    '[Navigate] Add Navigate',
    props<{navigate: Navigate}>()
)