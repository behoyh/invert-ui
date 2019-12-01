import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMessageComponent } from './new-message.component';
import { BannerComponent } from './banner/banner.component';
import { NewRoutingModule } from './new-routing.module';
import { MarketingComponent } from './marketing/marketing.component';
import { PopupComponent } from './popup/popup.component';
import { LoginComponent } from './login/login.component';
import { DropdownSelectorComponent } from './shared/dropdown-selector.component';
import { MessagePreviewerComponent } from './shared/message-previewer.component';
import { TitleComponent } from './shared/title/title.component';
import { BodyComponent } from './shared/body/body.component';
import { DatetimeSelectorComponent } from './shared/datetime-selector/datetime-selector.component';
import { ImageUploaderComponent } from './shared/image-uploader/image-uploader.component';
import { TypeSelectorComponent } from './shared/type-selector/type-selector.component';
import { UrgentToogleComponent } from './shared/urgent-toogle/urgent-toogle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TargetUploaderComponent } from './shared/target-uploader/target-uploader.component';
import { VersionSelectorComponent } from './shared/version-selector/version-selector.component';
import { LinkComponent } from './shared/link/link.component';

@NgModule({
  declarations: [NewMessageComponent, BannerComponent, MarketingComponent, PopupComponent, LoginComponent, DropdownSelectorComponent, MessagePreviewerComponent, TitleComponent, BodyComponent, DatetimeSelectorComponent, ImageUploaderComponent, TypeSelectorComponent, UrgentToogleComponent, TargetUploaderComponent, VersionSelectorComponent, LinkComponent],
  imports: [
    CommonModule,
    NewRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule
  ],
  providers: [],
  bootstrap: [NewMessageComponent]
})
export class NewMessageModule { }
