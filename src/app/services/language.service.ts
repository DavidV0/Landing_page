import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang: 'DE' | 'EN' | 'SRB' = 'SRB';

  constructor() {}

  setLen(lang: 'DE' | 'EN' | 'SRB') {
    this.currentLang = lang;
  }

  getLen(): 'DE' | 'EN' | 'SRB' {
    return this.currentLang;
  }
}
