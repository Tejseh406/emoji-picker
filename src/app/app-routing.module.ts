import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexBoxComponent } from './flex-box/flex-box.component';

const routes: Routes = [
  {
    path: 'flex-box',
    component: FlexBoxComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
