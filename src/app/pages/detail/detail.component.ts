import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  image: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

 ngOnInit() {
    const imageId = this.route.snapshot.paramMap.get('id');
    
    if (imageId !== null) {
      this.fetchImageDetails(imageId);
    }
  }
  
  
  fetchImageDetails(imageId: string) {
    const apiUrl = `https://api.unsplash.com/photos/${imageId}?client_id=ScFHf4ynFZAKr_VPfBN0srn8z05qCxsauBzLDvff9hI`;

    this.http.get<any>(apiUrl).subscribe((data: any) => {
      this.image = data;
    });
  }
}
