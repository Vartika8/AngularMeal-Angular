import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

import { HttpClient } from '@angular/common/http';
import { Food } from '../food';
import { FoodService } from '../food.service';
=======
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { finalize } from "rxjs/operators";
// import { ImageService } from 'src/app/shared/image.service'; 
>>>>>>> e8a2e3a96229d81edbb0fa8a496db9e2c4db555e

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
<<<<<<< HEAD
export class AddfoodComponent implements OnInit {
food:Food;
message:string;
public selectedFile;
public event1;
imgURL: any;
receivedImageData: any;
base64Data: any;
convertedImage: any;

  constructor(private foodService:FoodService,private httpClient: HttpClient) {
    this.food=new Food();
   }

  ngOnInit(): void {
  }
  public addfood()
  {
    let sess=JSON.parse(sessionStorage.getItem('username'));
  console.log(sess.restaurant.id);
    this.food.id=sess.restaurant.id;
    if( this.foodService.addFood(this.food))
    {
      this.message="Sucessfully Added";
    }
    else
    {
      this.message="Un-Sucessfully Added";
    }

  }

  public  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
  };

 }


 // This part is for uploading
 onUpload() {

console.log("hello");
  const uploadData = new FormData();
  uploadData.append('myFile', this.selectedFile, this.selectedFile.name);


  this.httpClient.post('http://localhost:9090/api/food/upload', uploadData)
  .subscribe(
               res => {console.log(res);
                       this.receivedImageData = res;
                       this.base64Data = this.receivedImageData.data;
                       this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data; },
               err => console.log('Error Occured duringng saving: ' + err)
            );


 }
  


  
=======
export class RestaurantprofileComponent implements OnInit {

  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    caption: new FormControl(''),
    category: new FormControl(''),
    imageUrl: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
    this.resetForm();
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '/assets/img/image_placeholder.jpg';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      // const fileRef = this.storage.ref(filePath);
      // this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          // fileRef.getDownloadURL().subscribe((url) => {
            // formValue['imageUrl'] = url;
            // this.service.insertImageDetails(formValue);
            this.resetForm();
          })
        // }.
        // )
      // ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      imageUrl: '',
      category: 'Animal'
    });
    this.imgSrc = '/assets/img/image_placeholder.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }
>>>>>>> e8a2e3a96229d81edbb0fa8a496db9e2c4db555e
}
