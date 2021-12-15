import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/messages.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  private _blobId: number = 0;
  set blobId(value) 
  {
    this.getImage(value);
    this._blobId = value;
  }
  get blobId()
  {
    return this._blobId
  }

  filename:string;
  imageUrl:string;
  public constructor(private service: MessagesService, private domSanitizer: DomSanitizer)
  {
    
  }

  ngOnInit(): void {
  }

  public imageChanged(event)
  {
    var file = event.target.files[0];

    this.service.UploadBlob(file, "png").subscribe((x)=>{
      this.blobId = x;
    });

    this.filename = file.name;
  };

  private getImage(blobId:number){
    if (!blobId)
    {
      return;
    }
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
