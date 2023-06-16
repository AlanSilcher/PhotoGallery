import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  images = [
    { url: 'https://images.unsplash.com/photo-1686391640847-e08e425127f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80', id: 'imagen1' },
    { url: 'https://plus.unsplash.com/premium_photo-1684966120297-499ef1975987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', id: 'imagen2' },
    { url: 'https://images.unsplash.com/photo-1686465606900-d8b7724aa356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', id: 'imagen3' }
  ];

  redirectToDetail(id: string) {
    // Lógica para redireccionar a detalles de la imagen
  }
}
