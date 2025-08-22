import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'custom-first-australians-indication',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-australians-indication.component.html',
  styleUrl: './first-australians-indication.component.scss'
})
export class FirstAustraliansIndicationComponent {
  @Input() hostComponent!: any;

  hasMatchingSubject = false;

  ngOnInit() {
    //console.log('FirstAustraliansComponent ngOnInit:');  // Debug: Log component and inspect the hostComponent input for troubleshooting or checking
    //console.log(this.hostComponent);

    const display = this.hostComponent?.display;
    const subject: string[] = display?.subject || [];

    const targetValues = ['Aboriginal Australian', 'Torres Strait Islander'];

    this.hasMatchingSubject = subject.some(entry =>
      targetValues.some(value => entry.includes(value))
    );
  }

}