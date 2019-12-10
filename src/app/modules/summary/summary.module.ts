import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [SummaryComponent],
  exports:      [SummaryComponent],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
  ]
})
export class SummaryModule { }
