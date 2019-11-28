import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMessageComponent } from './new-message.component';
import { BannerComponent } from './banner/banner.component';
import { NewRoutingModule } from './new-routing.module';
import { MarketingComponent } from './marketing/marketing.component';
import { PopupComponent } from './popup/popup.component';
import { AcknowledgmentComponent } from './acknowledgment/acknowledgment.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [NewMessageComponent, BannerComponent, MarketingComponent, PopupComponent, AcknowledgmentComponent, LoginComponent],
  imports: [
    CommonModule,
    NewRoutingModule
  ],
  providers: [],
  bootstrap: [NewMessageComponent]
})
export class NewMessageModule { }
