import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { CollectionComponent } from './collection/collection.component';
import { CollectionFilterPipe } from './collection-filter.pipe';

@NgModule({
  declarations: [
    CollectionComponent,
    CollectionFilterPipe
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: CollectionComponent,
        data: { breadcrumbs: ['Collection'] }
      },
    ]),
    PanelsModule,
    AlertModule
  ],
})
export class CollectionModule { }
