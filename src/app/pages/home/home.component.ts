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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchImages();
  }

  fetchImages() {
    const apiUrl = `https://api.unsplash.com/photos/random?count=${this.imagesPerPage}&client_id=ScFHf4ynFZAKr_VPfBN0srn8z05qCxsauBzLDvff9hI`;

    this.http.get<Object[]>(apiUrl).subscribe((data: Object[]) => {
      const newImages = data.map((item: any) => item.urls.small);
      this.images = this.images.concat(newImages);
    });
  }

  loadMoreImages() {
    this.fetchImages();
  }

  canLoadMoreImages(): boolean {
    return this.images.length % this.imagesPerPage === 0;
   
  }
}
