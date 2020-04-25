import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
import { Router, ActivatedRoute } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';

=======
>>>>>>> e8a2e3a96229d81edbb0fa8a496db9e2c4db555e
@Component({
  selector: 'app-updatefood',
  templateUrl: './updatefood.component.html',
  styleUrls: ['./updatefood.component.css']
})
export class UpdatefoodComponent implements OnInit {
<<<<<<< HEAD
id:any;
food:any;
message:any;
  constructor(private foodService:FoodService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.food=new Food();
    this.id = this.route.snapshot.params['id'];
   this.foodService.viewFood(this.id).subscribe(data=>{
   
    this.food=data;
   }, error => console.log(error));
  }
  public updateFood()
  {
  
    if(this.foodService.updateFood(this.food))
    {
      this.message="Successfully Updated";
    }
    else
    {
      this.message="Un-Successfully Update";
    }
  }
=======

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> e8a2e3a96229d81edbb0fa8a496db9e2c4db555e
}
