import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { NewMessageComponent } from './new-message.component';
import { PopupComponent } from './popup/popup.component';
import { MarketingComponent } from './marketing/marketing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path:'new', component: NewMessageComponent,
    children:[
      {path:'Banner', component: BannerComponent},
      {path:'Popup', component: PopupComponent},
      {path:'Marketing', component: MarketingComponent},
      {path:'Login', component: LoginComponent},
      {path:'Banner/:id', component: BannerComponent},
      {path:'Popup/:id', component: PopupComponent},
      {path:'Marketing/:id', component: MarketingComponent},
      {path:'Login/:id', component: LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class NewRoutingModule { }
