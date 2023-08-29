import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() color: string = '#013289';
  @Input() background: string = '#FFFFFF';
  @Input() popupColor: string = '#013289';
  @Input() popupBackground: string = '#FFFFFF';
  @Input() selectedLanguage = 'english';
  @Output() selectedLanguageEmmiter: EventEmitter<string> = new EventEmitter<string>();

 action: any;
 languageCode: any;


  constructor(private translateService: TranslateService) { }

  selectLanguage() {
    if(this.action == 'french') {
      this.action = 'english';
      this.languageCode = 'en';
    } else {
      this.action = 'french';
      this.languageCode = 'fr';
    }

   this.translateService.use(this.languageCode);
   this.selectedLanguage =  this.action;
   this.selectedLanguageEmmiter.emit( this.action);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}
