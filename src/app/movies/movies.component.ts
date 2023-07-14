import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  Title!: string;
  Details: any;
  constructor(private httpClient:HttpClient) {}
  // func for search movies by api key
  SearchMovies() {
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=388b6b19"+ '&t=' + this.Title;
    this.httpClient.get(url).subscribe((data: any) => {
      this.Details = data;
    });
  }
}
