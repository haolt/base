import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MultilangsService } from '../multilangs.service';

@Component({
  selector: 'app-select-lang',
  templateUrl: './select-lang.component.html',
  styleUrls: ['./select-lang.component.css']
})
export class SelectLangComponent implements OnInit {

  public selectedLang = 'en';
  public allLangs: string[];
  constructor(
    private translate: TranslateService,
    private multilangsService: MultilangsService
  ) {
    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang(this.selectedLang);
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');
    // RegEx

    this.allLangs = translate.getLangs();
  }
  ngOnInit() {
  }
  handleChangeLang() {
    this.multilangsService.changeSelectedLang(this.selectedLang);
    this.translate.use(this.selectedLang);
  }
}
