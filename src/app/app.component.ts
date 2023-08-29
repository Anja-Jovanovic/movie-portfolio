import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'world-of-cinephilia-web';

  globalLanguage = "english";




  // constructor(private translateService: TranslateService) {
  //   translate.setDefaultLang('en');
  //
  // }
  changeLanguage(event: string): void {

    this.globalLanguage = event;
  }
}
