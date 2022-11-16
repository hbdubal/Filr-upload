import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  uploadForm!: FormGroup;
  url = '../assets/images/Vector.png';
  allowedFileExtensions = ['jpg', 'jpeg', 'png', 'heif'];

  constructor(private fb: FormBuilder) {
    this.uploadForm = this.fb.group(
      {
        profilePhoto: ['', Validators.required]
      }
    )
  }

  onSelect(event: any) {
    let fileType = event.target.files[0].type;
    if (fileType.match(/image\/*/)) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
    else {
      alert("Please select correct image format")
    }
  }
}
