import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [PageOneComponent],
  exports:      [PageOneComponent],
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule.forChild(),
  ]
})
export class PageOneModule { }
