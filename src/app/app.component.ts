import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'world-of-cinephilia-web';

  globalLanguage = "en";

  changeLanguage(event: string): void {

    this.globalLanguage = event;
  }
}
