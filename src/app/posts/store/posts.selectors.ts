import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/interfaces/AppStateInterface";

export const selectFeature = (state: AppStateInterface) => state.posts;

export const isLoadingSelector = createSelector(selectFeature,(state) => state.isLoading);
export const postSelector = createSelector(selectFeature,(state) => state.posts);
export const errorSelector = createSelector(selectFeature,(state) => state.error);