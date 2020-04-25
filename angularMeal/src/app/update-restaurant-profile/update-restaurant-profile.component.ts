import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { finalize } from "rxjs/operators";
// import { ImageService } from 'src/app/shared/image.service'; 

@Component({
  selector: 'app-update-restaurant-profile',
  templateUrl: './update-restaurant-profile.component.html',
  styleUrls: ['./update-restaurant-profile.component.css']
})
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
}