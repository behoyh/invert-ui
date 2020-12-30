import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MessagesService } from 'src/app/messages.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent {
  bloB_ID:number;
  filename:string;
  public constructor(private service: MessagesService)
  {
    
    
  }

  public imageChanged(event)
  {
    var file = event.target.files[0];

    this.service.UploadBlob(file, "png").subscribe((x)=>{
      // Display Preview File
      console.log(x);
    });

    this.filename = file.name;
  };
}
