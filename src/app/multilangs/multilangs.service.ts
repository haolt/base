import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MultilangsService {

  public selectedLang = 'en';
  public $selectedLangObservable: BehaviorSubject<string>;

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang(this.selectedLang);
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');
    this.$selectedLangObservable = new BehaviorSubject('en');
  }

  getSelectedLang() {
    return this.$selectedLangObservable;
  }
  changeSelectedLang(lang) {
    this.$selectedLangObservable.next(lang);
  }

  // handleChangeLang(selectedLang) {
  //   this.getSelectedLang.
  //   this.translate.use(selectedLang);
  // }

}
