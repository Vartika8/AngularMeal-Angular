import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { finalize } from "rxjs/operators";
<<<<<<< HEAD
import { Users } from '../users';
=======
// import { ImageService } from 'src/app/shared/image.service'; 
>>>>>>> e8a2e3a96229d81edbb0fa8a496db9e2c4db555e

@Component({
  selector: 'app-restaurantprofile',
  templateUrl: './restaurantprofile.component.html',
  styleUrls: ['./restaurantprofile.component.css']
})
export class RestaurantprofileComponent implements OnInit {
<<<<<<< HEAD
  users:Users=JSON.parse(sessionStorage.getItem("username"));
  constructor() { }

  ngOnInit(): void {
  }

=======

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
