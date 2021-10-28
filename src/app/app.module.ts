import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { UIShellModule } from 'carbon-components-angular';

import {
  NotificationModule,
  UserAvatarModule,
  AppSwitcherModule,
} from '@carbon/icons-angular';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    NotificationModule,
    UserAvatarModule,
    AppSwitcherModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
