import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Users } from '../users';
=======
>>>>>>> e8a2e3a96229d81edbb0fa8a496db9e2c4db555e

@Component({
  selector: 'app-restnav',
  templateUrl: './restnav.component.html',
  styleUrls: ['./restnav.component.css']
})
export class RestnavComponent implements OnInit {

<<<<<<< HEAD
  users:Users=JSON.parse(sessionStorage.getItem("username"));

  imagePath = "assets/images/logo.png";
=======
  imagePath = "asserts/images/logo.png";
>>>>>>> e8a2e3a96229d81edbb0fa8a496db9e2c4db555e
  
  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> e8a2e3a96229d81edbb0fa8a496db9e2c4db555e
