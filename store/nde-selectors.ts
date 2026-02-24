
import { createSelector, createFeatureSelector } from '@ngrx/store';

// Minimal shape definitions (refine types if you have them)
interface SearchState {
  entities: Record<string, any>;
}
interface FullDisplayState {
  selectedRecordId: string | null;
}

// 1) Feature selectors (names used by NDE app)
export const selectSearchState = createFeatureSelector<SearchState>('Search');
export const selectFullDisplayState = createFeatureSelector<FullDisplayState>('full-display');

// 2) All records keyed by docid/recordid
export const selectSearchEntities = createSelector(
  selectSearchState,
  (state) => state?.entities ?? {}
);

// 3) Fullview selected record ID
export const selectFullviewRecordId = createSelector(
  selectFullDisplayState,
  (state) => state?.selectedRecordId ?? null
);

// 4) Fullview record (includes pnx/display)
export const selectFullviewRecord = createSelector(
  selectFullviewRecordId,
  selectSearchEntities,
  (recordId, entities) => (recordId ? entities[recordId] : null)
);

// 5) Parameterized listview record selector
export const selectListviewRecord = (recordId: string | null) =>
  createSelector(selectSearchEntities, (entities) =>
    recordId ? entities[recordId] : null
  );