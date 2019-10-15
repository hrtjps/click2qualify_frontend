import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionListComponent } from './question-list/question-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';



@NgModule({
  declarations: [QuestionListComponent, AddQuestionComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: QuestionListComponent,
        data: {breadcrumbs: ['Admin', 'Question List'] }
      },
      {
        path: "add",
        component: AddQuestionComponent,
        data: {breadcrumbs: ['Admin', 'Add Question'] }
      },
    ])
  ]
})
export class QuestionsModule { }
