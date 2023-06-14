import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  authorQuery: string = '';
  searchResults: any[] = [];

  constructor(private http: HttpClient) { }

  searchImagesByAuthor() {
    console.log("Esto es search",this.authorQuery)
    const apiUrl = `https://api.unsplash.com/search/photos?query=${this.authorQuery}&client_id=YOUR_CLIENT_ID`;

    this.http.get<any>(apiUrl).subscribe((data: any) => {
      console.log(data)
      this.searchResults = data.results;
    });
  }
}
