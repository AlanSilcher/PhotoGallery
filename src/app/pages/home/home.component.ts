import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  columns: { url: string, id: string }[][] = [];
  imagesPerPage = 15;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.fetchImages();
  }

  fetchImages() {
    const apiUrl = `https://api.unsplash.com/photos/random?count=${this.imagesPerPage}&client_id=Y-qrJ1ErRuz4CigR6nD19M4ad76OLJyaKm-TAT7xl18`;

    this.http.get<Object[]>(apiUrl).subscribe((data: Object[]) => {
      const newImages = data.map((item: any) => ({ url: item.urls.small, id: item.id }));
      this.arrangeImagesInColumns(newImages);
    });
  }

  arrangeImagesInColumns(images: { url: string, id: string }[]) {
    const numColumns = 3;
    const imagesPerColumn = Math.ceil(images.length / numColumns);

    if (this.columns.length === 0) {
      // Si no hay columnas existentes, crear nuevas columnas con las imágenes
      for (let i = 0; i < numColumns; i++) {
        const startIndex = i * imagesPerColumn;
        const endIndex = startIndex + imagesPerColumn;
        const columnImages = images.slice(startIndex, endIndex);
        this.columns.push(columnImages);
      }
    } else {
      // Agregar las nuevas imágenes a las columnas existentes
      let columnIndex = 0;
      for (let i = 0; i < images.length; i++) {
        this.columns[columnIndex].push(images[i]);
        columnIndex = (columnIndex + 1) % numColumns;
      }
    }
  }

  loadMoreImages() {
    const apiUrl = `https://api.unsplash.com/photos/random?count=${this.imagesPerPage}&client_id=Y-qrJ1ErRuz4CigR6nD19M4ad76OLJyaKm-TAT7xl18`;

    this.http.get<Object[]>(apiUrl).subscribe((data: Object[]) => {
      const newImages = data.map((item: any) => ({ url: item.urls.small, id: item.id }));
      this.arrangeImagesInColumns(newImages);
    });
  }

  canLoadMoreImages(): boolean {
    return this.columns.length > 0;
  }

  redirectToDetail(id: string) {
    this.router.navigate(['/detalle', id]);
  }
}
