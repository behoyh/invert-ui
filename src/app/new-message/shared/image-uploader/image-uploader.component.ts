import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageUploaderComponent {
  image: string;
  imageurl: string;
  ImageChanged: (upload: any) => void;
}
