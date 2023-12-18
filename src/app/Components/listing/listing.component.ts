import { Component } from '@angular/core';
import { FilmAPIService } from '../../Services/film-api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {

  cardFilm: any;
  searchTerm: string = "";
  filteredFilms!: any[];
  favorites: any[] = [];
  isLoading: boolean = false;

  constructor(private filmAPI: FilmAPIService, private router: Router, private http: HttpClient) {}

  ngOnInit(){
    this.filmAPI.getFilmData().subscribe((data) => {
      this.cardFilm = data;
      //console.log('data: ',data);
    });
    this.filteredFilms = this.cardFilm;
    //console.log('data: ', this.filteredFilms);
  }

  search() {
    if (this.searchTerm) {
      this.filteredFilms = this.cardFilm.filter((cardFilm: { Title: string; }) => {
        return cardFilm.Title.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    } else {
      this.filteredFilms = this.cardFilm;
    }
  }


  setCardFilm(film: any) {
    this.isLoading = true;
    setTimeout(() => {
      const queryParams = { Title: film.Title, Images: film.Images, Plot: film.Plot };
      this.router.navigate(['/detail'], { queryParams: queryParams });
    }, 3000); // Ritardo di 3000 millisecondi (3 secondi)
  }


  toggleFavorite(film: any) {
    if (this.isFavorite(film)) {
      this.removeFavorite(film);
    } else {
      this.addFavorite(film);
    }
  }

  isFavorite(film: any): boolean {
    const favoritesString = localStorage.getItem('favorites');
    if (favoritesString) {
      const favorites = JSON.parse(favoritesString);
      return favorites.some((favoriteFilm: { Title: any; }) => favoriteFilm.Title === film.Title);
    }
    return false;
  }

  addFavorite(film: any) {
    if (!this.isFavorite(film)) {
      this.favorites.push(film);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }

  removeFavorite(film: any) {
    const index = this.favorites.findIndex(favoriteFilm => favoriteFilm.Title === film.Title);
    if (index !== -1) {
      this.favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }

}
