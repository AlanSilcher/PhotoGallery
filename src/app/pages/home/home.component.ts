import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images: string[] = [];
  imagesPerPage = 15;
  currentPage = 1;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchImages();
  }

  fetchImages() {
    const apiUrl = `https://api.unsplash.com/photos?page=${this.currentPage}&per_page=${this.imagesPerPage}&client_id=ScFHf4ynFZAKr_VPfBN0srn8z05qCxsauBzLDvff9hI`;

    console.log('Fetching images');

    this.http.get<Object[]>(apiUrl).subscribe((data: Object[]) => {
      const newImages = data.map((item: any) => item.urls.small);
      this.images = this.images.concat(newImages);
    });
  }

  loadMoreImages() {
    this.currentPage++;
    this.fetchImages();
  }

  canLoadMoreImages(): boolean {
    return this.images.length % this.imagesPerPage === 0;
  }
}
