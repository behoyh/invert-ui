import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MessagesService } from 'src/app/messages.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageUploaderComponent {
  bloB_ID:number;

  public constructor(private service: MessagesService)
  {
    
    
  }

  ImageChanged(upload: any)
  {
    debugger;
    this.service.UploadBlob(upload, "png");
  };
}
