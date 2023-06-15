import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  authorQuery: string = '';
  searchResults: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
    });
  }

  searchImagesByAuthor() {
    console.log("Esto es search", this.authorQuery);
    this.currentPage = 1;
    this.fetchImagesByAuthor();
  }

  fetchImagesByAuthor() {
    const apiUrl = `https://api.unsplash.com/users/${this.authorQuery}/photos?per_page=100&client_id=ScFHf4ynFZAKr_VPfBN0srn8z05qCxsauBzLDvff9hI`;
    
    this.http.get<any[]>(apiUrl).subscribe((data: any[]) => {
      console.log(data);
      this.searchResults = data;
      this.totalPages = 1;
    });
  }
  

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.fetchImagesByAuthor();
    }
  }

  totalPagesArray(): number[] {
    const minPage = Math.max(1, this.currentPage - 3);
    const maxPage = Math.min(this.totalPages, this.currentPage + 3);
    return Array.from({ length: maxPage - minPage + 1 }, (_, i) => minPage + i);

  }
}


