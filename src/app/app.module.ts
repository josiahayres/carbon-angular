import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

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
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LandingPageComponent],
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
