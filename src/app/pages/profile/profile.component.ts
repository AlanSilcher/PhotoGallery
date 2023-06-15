import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string = '';
  userImages: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username') ?? '';
    this.fetchUserImages(this.username);
  }

  fetchUserImages(username: string) {
    const perPage = 30; 
    let page = 1; 
    let images: any[] = [];

    const fetchPage = () => {
      const apiUrl = `https://api.unsplash.com/users/${username}/photos?client_id=ScFHf4ynFZAKr_VPfBN0srn8z05qCxsauBzLDvff9hI&page=${page}&per_page=${perPage}`;

      this.http.get<any[]>(apiUrl).subscribe((data: any[]) => {
        if (data.length > 0) {
          images = [...images, ...data];
          page++;
          fetchPage(); 
        } else {
          this.userImages = images;
        }
      });
    };

    fetchPage();
  }
}
