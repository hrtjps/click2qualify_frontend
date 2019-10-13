import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ModalModule } from 'ngx-bootstrap';
import { DialogsService } from './dialogs.service';

@NgModule({
  declarations: [ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    ModalModule
  ],
  providers: [DialogsService]
})
export class DialogsModule { }
