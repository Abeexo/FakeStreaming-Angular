import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ListingComponent } from './Components/listing/listing.component';
import { DetailComponent } from './Components/detail/detail.component';
import { FavoritesComponent } from './Components/favorites/favorites.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { Aguard } from 'src/Guards/a.guard';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent, pathMatch: 'full' },
  { path: 'listing', component: ListingComponent, pathMatch: 'full',canActivate: [Aguard] },
  { path: 'detail', component: DetailComponent, pathMatch: 'full',canActivate: [Aguard] },
  { path: 'favorites', component: FavoritesComponent, pathMatch: 'full',canActivate: [Aguard] },
  { path: 'home', component: HomepageComponent, pathMatch: 'full',canActivate: [Aguard] },
  { path: '', component: RegistrationComponent, pathMatch: 'full'  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
