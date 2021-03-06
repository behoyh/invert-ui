import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HelpComponent } from './help/help.component';
import { HttpClientModule } from '@angular/common/http';
import { NewMessageModule } from './new-message/new-message.module';
import { AppState } from './shared/app.state';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { MomentModule } from 'ngx-moment';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavComponent,
    FooterComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NewMessageModule,
    NgxsModule.forRoot([
      AppState
    ],{ developmentMode: !environment.production }),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    BrowserAnimationsModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
