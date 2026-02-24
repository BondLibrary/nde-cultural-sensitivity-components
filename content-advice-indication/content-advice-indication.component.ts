import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { map, distinctUntilChanged, shareReplay, auditTime } from 'rxjs/operators';
import { NdeStoreService } from '../services/nde-store.service';

@Component({
  selector: 'custom-content-advice-indication',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-advice-indication.component.html',
  styleUrls: ['./content-advice-indication.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentAdviceIndicationComponent {
  @Input() hostComponent!: any;

  // Reactive flag used in the template
  hasContentAdvice$: Observable<boolean> = of(false);

  constructor(private storeSvc: NdeStoreService) {}

  ngOnInit() {
    // Record stream: emits whenever Fullview selected record or Listview row record changes
    const record$ = this.storeSvc.getRecord$(this.hostComponent).pipe(
      // Defer to next microtask so we compute *after* the store settles to the new record
      auditTime(0),
      shareReplay({ bufferSize: 1, refCount: true })
    );

    this.hasContentAdvice$ = record$.pipe(
      map((record) => this.computeHasLds06(record)),
      distinctUntilChanged()
    );
  }

  // Checks for the presence of lds06 in the host component's display data

  private computeHasLds06(record: any): boolean {
    const lds06 =
      this.hostComponent?.display?.lds06 ??
      null;

  return !!lds06;
}
}
