import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../users';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  Users1:Observable<Users>
  constructor(private restaurantService:RestaurantService,public router:Router) { }

  ngOnInit(): void {
    this.showdata();
  }
  showdata(){
    this.Users1=this.restaurantService.resturantList();
    this.Users1.subscribe(data=>{
  console.log(data);
    });
  }
}
