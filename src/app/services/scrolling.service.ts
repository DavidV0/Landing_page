import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url.split('#');
        if (url.length > 1) {
          setTimeout(() => {
            this.scrollToAnchor(url[1]);
          }, 50); // Warte kurz, damit die Navigation abgeschlossen ist
        }
      }
    });
  }

  private scrollToAnchor(anchorId: string) {
    const element = document.getElementById(anchorId);
    if (element) {
      const yOffset = -70; // Passe den Offset-Wert an die Höhe deiner Navbar an
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
