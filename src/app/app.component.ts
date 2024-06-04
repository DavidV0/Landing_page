import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Health & Supplements';

  constructor(private router: Router, public translate: TranslateService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url.split('#');
        if (url.length > 1) {
          this.scrollToAnchor(url[1]);
        }
      }
    });

    translate.addLangs(['en', 'de', 'srb']);
    const defaultLang = 'srb';
    translate.setDefaultLang(defaultLang);
  }

  private scrollToAnchor(anchorId: string) {
    const element = document.getElementById(anchorId);
    if (element) {
      const yOffset = -70; // Adjust the offset value to the height of your navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
