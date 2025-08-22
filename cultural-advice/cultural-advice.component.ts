import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'custom-cultural-advice',
  standalone: true,
  imports: [],
  templateUrl: './cultural-advice.component.html',
  styleUrl: './cultural-advice.component.scss'
})


export class CulturalAdviceComponent implements OnInit {
  private readonly cookieName = 'modelessCulturalAdviceDismissed';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    const container = this.el.nativeElement.querySelector('#modeless-cultural-advice');

    if (!container) return;

    if (this.getCookie(this.cookieName)) {
      container.style.display = 'none';
      return;
    }

    const closeButton = container.querySelector('.close-btn');
    if (closeButton) {
      this.renderer.listen(closeButton, 'click', () => {
        this.setCookie(this.cookieName, 'true', 1);
        container.style.display = 'none';
      });
    }

    this.renderer.listen(document, 'touchstart', (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      if (!container.contains(target)) {
        container.style.display = 'none';
      }
    });
  }

  private setCookie(name: string, value: string, days: number): void {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = `${name}=${value || ''}${expires}; path=/`;
  }

  private getCookie(name: string): string | null {
    const nameEQ = name + '=';
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(nameEQ)) {
        return cookie.substring(nameEQ.length);
      }
    }
    return null;
  }
}
