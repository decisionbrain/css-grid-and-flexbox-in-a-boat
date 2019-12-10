import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { PageSixComponent } from './page-six.component';



@NgModule({
  declarations: [PageSixComponent],
  exports:      [PageSixComponent],
  imports: [
    CommonModule,
    MarkdownModule.forChild()
  ]
})
export class PageSixModule { }
