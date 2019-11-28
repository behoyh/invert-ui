import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { NewMessageComponent } from './new-message.component';

const routes: Routes = [
  {path:'new', component: NewMessageComponent},
  {path:'new/banner', component: BannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NewRoutingModule { }
