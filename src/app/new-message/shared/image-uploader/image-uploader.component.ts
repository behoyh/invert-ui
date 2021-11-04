import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/messages.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {
  bloB_ID:number;
  filename:string;
  imageUrl:string;
  public constructor(private service: MessagesService)
  {
    
  }

  ngOnInit(): void {
    console.log(this.bloB_ID);
    this.getImage(this.bloB_ID);
  }

  public imageChanged(event)
  {
    var file = event.target.files[0];

    this.service.UploadBlob(file, "png").subscribe((x)=>{
      this.getImage(x);
    });

    this.filename = file.name;
  };

  private getImage(blobId:number){
    this.service.GetBlob(blobId).subscribe((x: Blob)=>{
      let me = this;
      var reader = new FileReader();
      reader.onloadend = function() {
        me.imageUrl = reader.result.toString();
      };
      reader.readAsDataURL(x); 
    });
  }

}
