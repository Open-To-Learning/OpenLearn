import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Validators, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-course-video-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    NgIf,
    MatIconModule
  ],
  templateUrl: './course-video-form.component.html',
  styleUrl: './course-video-form.component.scss'
})
export class CourseVideoFormComponent {
  videoFormGroup = this._formBuilder.group({
    courseVideoLinkCtrl: ['', Validators.required],
    courseTitleCtrl: ['', Validators.required],
    courseDescriptionCtrl: ['', Validators.required],
    courseThumbnailCtrl: ['', Validators.required],
    coursePriceCtrl: ['', Validators.required]
  });

  // course thubnail
  imageName: string | ArrayBuffer | null = null;
  imageUrl: string | ArrayBuffer | null = null;

  uploadImage(): void {
    console.log('Image uploaded:', this.imageUrl);
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.previewImage(file);
    this.imageName = file.name;
  }

  previewImage(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
  }

  fetchedSuccess: boolean = false;

  fetchVideo() {
    this.fetchedSuccess = true;
  }

  constructor(
    private _formBuilder: FormBuilder
  ) {

  }
}
