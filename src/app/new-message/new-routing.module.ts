import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { NewMessageComponent } from './new-message.component';
import { PopupComponent } from './popup/popup.component';
import { MarketingComponent } from './marketing/marketing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'new', component: NewMessageComponent,children:[
    {path:'banner', component: BannerComponent},
    {path:'popup', component: PopupComponent},
    {path:'marketing', component: MarketingComponent},
    {path:'login', component: LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NewRoutingModule { }
