import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  isLoading: boolean = true;
  film: any;


  constructor(private route: ActivatedRoute,private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.setIsLogged(true);
    this.route.queryParams.subscribe(params => {
      this.film = params;
      this.isLoading = false;
    });
  }
}
