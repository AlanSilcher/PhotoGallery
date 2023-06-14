import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images: { url: string, id: string }[] = [];
  imagesPerPage = 15;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.fetchImages();
  }

  fetchImages() {
    const apiUrl = `https://api.unsplash.com/photos/random?count=${this.imagesPerPage}&client_id=ScFHf4ynFZAKr_VPfBN0srn8z05qCxsauBzLDvff9hI`;

    this.http.get<Object[]>(apiUrl).subscribe((data: Object[]) => {
      const newImages = data.map((item: any) => ({ url: item.urls.small, id: item.id }));
      this.images = this.images.concat(newImages);
    });
  }

  loadMoreImages() {
    this.fetchImages();
  }

  canLoadMoreImages(): boolean {
    return this.images.length % this.imagesPerPage === 0;
  }

  redirectToDetail(id: string) {
    this.router.navigate(['/detail', id]);
  }
}
