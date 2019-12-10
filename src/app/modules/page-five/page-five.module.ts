import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { PageFiveComponent } from './page-five.component';



@NgModule({
  declarations: [PageFiveComponent],
  exports:      [PageFiveComponent],
  imports: [
    CommonModule,
    MarkdownModule.forChild()
  ]
})
export class PageFiveModule { }
