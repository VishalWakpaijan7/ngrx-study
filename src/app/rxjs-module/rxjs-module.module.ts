import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsModuleComponent } from './rxjs-module.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: RxjsModuleComponent }];

@NgModule({
  declarations: [
    RxjsModuleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RxjsModuleModule { }
