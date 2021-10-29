import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  UIShellModule,
  GridModule,
  BreadcrumbModule,
  ButtonModule,
  TabsModule,
} from 'carbon-components-angular';

import {
  NotificationModule,
  UserAvatarModule,
  AppSwitcherModule,
} from '@carbon/icons-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    NotificationModule,
    UserAvatarModule,
    AppSwitcherModule,
    GridModule,
    BreadcrumbModule,
    ButtonModule,
    TabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
