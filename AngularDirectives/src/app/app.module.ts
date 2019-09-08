import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestNgIfDirectiveComponent } from './test-ng-if-directive/test-ng-if-directive.component';
import { TestNgSwitchDirectiveComponent } from './test-ng-switch-directive/test-ng-switch-directive.component';
import { TestNgForDirectiveComponent } from './test-ng-for-directive/test-ng-for-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    TestNgIfDirectiveComponent,
    TestNgSwitchDirectiveComponent,
    TestNgForDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
