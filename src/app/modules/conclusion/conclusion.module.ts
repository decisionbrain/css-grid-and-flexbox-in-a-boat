import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConclusionComponent } from './conclusion.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [ConclusionComponent],
  exports:      [ConclusionComponent],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
  ]
})
export class ConclusionModule { }
