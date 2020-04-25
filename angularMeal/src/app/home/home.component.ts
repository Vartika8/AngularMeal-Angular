import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagePath = [
    '/assets/images/logo.png',
    '/assets/images/image1.jpeg',
    '/assets/images/order.png',
    '/assets/images/locate.png',
    '/assets/images/phone.jfif',
    '/assets/images/play.webp',    
    '/assets/images/iOS.webp',    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
