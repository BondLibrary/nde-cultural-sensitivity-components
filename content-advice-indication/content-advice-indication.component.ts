import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'custom-content-advice-indication',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-advice-indication.component.html',
  styleUrls: ['./content-advice-indication.component.scss']
})
export class ContentAdviceIndicationComponent {
  @Input() hostComponent!: any;

  hasLds06 = false;

  ngOnInit() {
    //console.log('ContentAdviceIndicationComponent ngOnInit:'); // Debug: Log component and inspect the hostComponent input for troubleshooting or checking
    //console.log(this.hostComponent);

    const display = this.hostComponent?.display;
    if (display?.lds06) {
      this.hasLds06 = true;
    }
  }
}
