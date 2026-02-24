import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { map, distinctUntilChanged, shareReplay, auditTime } from 'rxjs/operators';
import { NdeStoreService } from '../services/nde-store.service';

@Component({
  selector: 'custom-first-australians-indication',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-australians-indication.component.html',
  styleUrl: './first-australians-indication.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstAustraliansIndicationComponent {
  @Input() hostComponent: any = {};

  // Reactive flag for template
  hasMatchingSubject$: Observable<boolean> = of(false);

  private readonly targetPatterns = [
    /\baboriginal australians?\b/i,
    /\btorres strait islanders?\b/i,
  ];

  constructor(private storeSvc: NdeStoreService) {}

  ngOnInit() {
    // Record stream emits whenever the store advances to a new selected record
    const record$ = this.storeSvc.getRecord$(this.hostComponent).pipe(
      // Defer to next microtask so we compute after store settles (fixes first-step lag)
      auditTime(0),
      shareReplay({ bufferSize: 1, refCount: true })
    );

   // Checks for the presence of subjects in the host component's display data
    this.hasMatchingSubject$ = record$.pipe(
      map((record) => {
        const subjects: string[] =
          this.hostComponent?.display?.subject ??
          [];

        return Array.isArray(subjects)
          ? subjects.some((s) =>
              this.targetPatterns.some((rx) => rx.test((s ?? '').trim()))
            )
          : false;
      }),
      distinctUntilChanged()
    );
  }
}
