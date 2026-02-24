import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, distinctUntilChanged } from 'rxjs/operators';
import { selectFullviewRecord, selectListviewRecord } from '../store/nde-selectors';

@Injectable({ providedIn: 'root' })
export class NdeStoreService {
  constructor(private store: Store) {}

  /**
   * Returns an Observable of the current record:
   * - In Fullview: selectFullviewRecord
   * - In Listview: use recordId from hostComponent.searchResult.pnx.control.recordid[0]
   */
  getRecord$(hostComponent: any): Observable<any> {
    const listRecordId: string | null =
      hostComponent?.searchResult?.pnx?.control?.recordid?.[0] ?? null;

    return this.store.select(selectFullviewRecord).pipe(
      switchMap((fullview) =>
        fullview
          ? of(fullview)
          : this.store.select(selectListviewRecord(listRecordId))
      ),
      // Basic guard to avoid emitting identical references back-to-back
      distinctUntilChanged()
    );
  }
}