import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { DetailComponent } from './Components/detail/detail.component';
import { ListingComponent } from './Components/listing/listing.component';
import { MatCardModule } from '@angular/material/card';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { AlertDialogComponent } from './Components/alert-dialog-component/alert-dialog-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmAPIService } from './Services/film-api.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { FavoritesComponent } from './Components/favorites/favorites.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UpperpipePipe } from './pipes/upperpipe.pipe';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListingComponent,
    RegistrationComponent,
    LoginComponent,
    AlertDialogComponent,
    FavoritesComponent,
    NavbarComponent,
    HomepageComponent,
    UpperpipePipe,
    PageNotFoundComponent,
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [FilmAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
