import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Movies} from "../../models/Movies";

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
  @Input() selectedLanguage = 'en';
  @Output() selectedLanguageEmmiter: EventEmitter<string> = new EventEmitter<string>();

 action: any;
 languageCode: any;

  searchText = '';

  ngOnInit(): void {
    this.search();
  }

  filteredMovies: Movies[] = []
  filmovi : Movies[] = [
    {
      "adult": false,
      "backdrop_path": "/2Icjry0xdRSNxrtsBR1F47b9r3u.jpg",
      "genre_ids": [
        28,
        878,
        27
      ],
      "id": 615656,
      "original_language": "en",
      "original_title": "Meg 2: The Trench",
      "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
      "popularity": 6365.282,
      "poster_path": "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
      "release_date": "2023-08-02",
      "title": "Meg 2: The Trench",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 941
    },{
      "adult": false,
      "backdrop_path": "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
      "genre_ids": [
        16,
        35,
        10751,
        14,
        10749
      ],
      "id": 976573,
      "original_language": "en",
      "original_title": "Elemental",
      "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
      "popularity": 2150.878,
      "poster_path": "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
      "release_date": "2023-06-14",
      "title": "Elemental",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 1553
    }

  ]


  constructor(private translateService: TranslateService) { }

  selectLanguage() {
    if(this.action == 'fr') {
      this.action = 'en';
      this.languageCode = 'en';
    } else {
      this.action = 'fr';
      this.languageCode = 'fr';
    }

   this.translateService.use(this.languageCode);
   this.selectedLanguage =  this.action;
   this.selectedLanguageEmmiter.emit( this.action);
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }


  searchKey(data: string) {
    this.searchText = data;
    this.search();
  }

  search() {
    this.filteredMovies = this.searchText === ""? this.filmovi : this.filmovi.filter((element) => {
      return element.original_title.toLowerCase() == this.searchText.toLowerCase();
    });
  }

}
