import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() language = 'SRB';

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private translate: TranslateService
  ) {
    this.language = this.languageService.getLen();
    this.translate.use(this.language.toLowerCase());
  }

  closeMenu() {
    const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
    if (menuToggle) {
      menuToggle.checked = false;
    }
  }

  translating() {
    const newLang = this.language === 'DE' ? 'EN' : (this.language === 'EN' ? 'SRB' : 'DE');
    this.language = newLang;
    this.languageService.setLen(newLang);
    this.translate.use(newLang.toLowerCase());
  }
}
