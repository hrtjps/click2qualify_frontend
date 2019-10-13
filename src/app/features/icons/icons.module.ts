import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeLightComponent } from './font-awesome-light/font-awesome-light.component';
import { RouterModule } from '@angular/router';
import { JsonDataResolver } from 'src/app/core/resolvers/json-data.resolver';
import { IconListComponent } from './icon-list/icon-list.component';
import { IconModalComponent } from './icon-modal/icon-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { IconModalService } from './icon-modal/icon-modal.service';
import { FontAwesomeRegularComponent } from './font-awesome-regular/font-awesome-regular.component';
import { FontAwesomeSolidComponent } from './font-awesome-solid/font-awesome-solid.component';
import { FontAwesomeBrandComponent } from './font-awesome-brand/font-awesome-brand.component';
import { NextgenGeneralComponent } from './nextgen-general/nextgen-general.component';
import { NextgenBaseComponent } from './nextgen-base/nextgen-base.component';
import { StackIconsGenerateComponent, StackIconClassesPipe } from './stack-icons-generate/stack-icons-generate.component';
import { StackIconsShowcaseComponent } from './stack-icons-showcase/stack-icons-showcase.component';
import { FormsModule } from '@angular/forms';
import { PanelsModule } from 'src/app/shared/panels/panels.module';

@NgModule({
  declarations: [
    FontAwesomeLightComponent, IconListComponent, IconModalComponent,
    FontAwesomeRegularComponent, FontAwesomeSolidComponent, FontAwesomeBrandComponent, NextgenGeneralComponent, NextgenBaseComponent,
    StackIconsShowcaseComponent, StackIconsGenerateComponent, StackIconClassesPipe],
  entryComponents: [IconModalComponent],
  providers: [IconModalService],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    CollapseModule,
    PanelsModule,
    // to open modal from service we need import as root
    // @todo waiting for fix https://github.com/valor-software/ngx-bootstrap/issues/2356
    ModalModule.forRoot(),
    RouterModule.forChild([
      {
        path: 'font-awesome-light',
        component: FontAwesomeLightComponent,
        data: {
          breadcrumbs: ['Font Icons', 'Fontawesome 5', 'Light'],
          jsonData: {
            fontAwesomeIconList: 'assets/data/icons/fa-icon-list.json'
          }
        },
        resolve: {
          icons: JsonDataResolver
        }
      },
      {
        path: 'font-awesome-regular',
        component: FontAwesomeRegularComponent,
        data: {
          breadcrumbs: ['Font Icons', 'Fontawesome 5', 'Regular'],
          jsonData: {
            fontAwesomeIconList: 'assets/data/icons/fa-icon-list.json'
          }
        },
        resolve: {
          icons: JsonDataResolver
        }
      },
      {
        path: 'font-awesome-solid',
        component: FontAwesomeSolidComponent,
        data: {
          breadcrumbs: ['Font Icons', 'Fontawesome 5', 'Solid'],
          jsonData: {
            fontAwesomeIconList: 'assets/data/icons/fa-icon-list.json'
          }
        },
        resolve: {
          icons: JsonDataResolver
        }
      },
      {
        path: 'font-awesome-brand',
        component: FontAwesomeBrandComponent,
        data: {
          breadcrumbs: ['Font Icons', 'Fontawesome 5', 'Brand'],
          jsonData: {
            fontAwesomeIconList: 'assets/data/icons/fa-brand-list.json'
          }
        },
        resolve: {
          icons: JsonDataResolver
        }
      },
      {
        path: 'nextgen-general',
        component: NextgenGeneralComponent,
        data: {
          breadcrumbs: ['Font Icons', 'NextGen Icons', 'General'],
          jsonData: {
            nextGenIconList: 'assets/data/icons/ng-icon-list.json'
          }
        },
        resolve: {
          icons: JsonDataResolver
        }
      },
      {
        path: 'nextgen-base',
        component: NextgenBaseComponent,
        data: {
          breadcrumbs: ['Font Icons', 'NextGen Icons', 'Base'],
          jsonData: {
            nextGenIconList: 'assets/data/icons/ng-icon-base.json'
          }
        },
        resolve: {
          icons: JsonDataResolver
        }
      },
      {
        path: 'stack-icons-showcase',
        component: StackIconsShowcaseComponent,
        data: {
          breadcrumbs: ['Font Icons', 'Stack Icons', 'Showcase'],
        },
      },
      {
        path: 'stack-icons-generate',
        component: StackIconsGenerateComponent,
        data: {
          breadcrumbs: ['Font Icons', 'Stack Icons', 'Generate Stack'],
          jsonData: {
            fontAwesomeList: 'assets/data/icons/fa-icon-list.json',
            fontAwesomeBrands: 'assets/data/icons/fa-brand-list.json',
            nextGenBase: 'assets/data/icons/ng-icon-base.json',
            nextGenList: 'assets/data/icons/ng-icon-list.json',
            nextGenColors: 'assets/data/icons/ng-text-colors.json'
          }
        },
        resolve: {
          icons: JsonDataResolver
        }
      },
    ])
  ]
})
export class IconsModule { }
