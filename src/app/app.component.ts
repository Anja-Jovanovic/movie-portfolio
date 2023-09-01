import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'world-of-cinephilia-web';

  globalLanguage = "english";

  changeLanguage(event: string): void {

    this.globalLanguage = event;
  }
}
