import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageThreeComponent } from './page-three.component';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [PageThreeComponent],
  exports:      [PageThreeComponent],
  imports: [
    CommonModule,
    MarkdownModule.forChild()
  ]
})
export class PageThreeModule { }
