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
  imageUrl:string;
  public constructor(private service: MessagesService)
  {
    
    
  }

  public imageChanged(event)
  {
    var file = event.target.files[0];

    this.service.UploadBlob(file, "png").subscribe((x)=>{

      this.service.GetBlob(x).subscribe((x: Blob)=>{
        let me = this;
        var reader = new FileReader();
        reader.onloadend = function() {
          me.imageUrl = reader.result.toString();
        };
        reader.readAsDataURL(x); 
      });
    });

    this.filename = file.name;
  };
}
