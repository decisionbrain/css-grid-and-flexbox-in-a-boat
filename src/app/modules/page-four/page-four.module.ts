import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFourComponent } from './page-four.component';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [PageFourComponent],
  exports:      [PageFourComponent],
  imports: [
    CommonModule,
    MarkdownModule.forChild()
  ]
})
export class PageFourModule { }
