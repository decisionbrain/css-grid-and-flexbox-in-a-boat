import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkdownModule, MarkedOptions, MarkdownModuleConfig } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
import { HomeModule } from './modules/home/home.module';
import { PageOneModule } from './modules/page-one/page-one.module';
import { SummaryModule } from './modules/summary/summary.module';
import { PageTwoModule } from './modules/page-two/page-two.module';
import { PageThreeModule } from './modules/page-three/page-three.module';
import { PageFourModule } from './modules/page-four/page-four.module';
import { PageFiveModule } from './modules/page-five/page-five.module';
import { PageSixModule } from './modules/page-six/page-six.module';
import { ConclusionModule } from './modules/conclusion/conclusion.module';

// optional, only if you use [src] attribute
const markdownNetworkConfig: MarkdownModuleConfig = {
  loader: HttpClient,
  markedOptions: {
    provide: MarkedOptions,
    useValue: {
      sanitize: true
    }
  }
}

@NgModule({
  imports: [
    BrowserModule,
    MarkdownModule.forRoot(),
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    SummaryModule,
    PageOneModule,
    PageTwoModule,
    PageThreeModule,
    PageFourModule,
    PageFiveModule,
    PageSixModule,
    ConclusionModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
