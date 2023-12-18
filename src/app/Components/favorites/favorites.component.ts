import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favoritesData: { Title: string; Images: string; Plot: string }[] = [];
  loggedInUserName: string | undefined;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    const favoritesString = localStorage.getItem('favorites');
    if (favoritesString) {
      this.favoritesData = JSON.parse(favoritesString);
    }
    this.route.queryParams.subscribe(params => {
      if (params['Title'] && params['Images'] && params['Plot']) { //CONTROLLO SE I PARAMETRI SONO DEFINITI
      const { Title, Images, Plot } = params;
      this.favoritesData.push({ Title, Images, Plot });
      }
    });
  }

  removeFromFavorites(favorite: any) {
    const index = this.favoritesData.indexOf(favorite);
    if (index !== -1) {
      this.favoritesData.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(this.favoritesData));
    }
  }

}
