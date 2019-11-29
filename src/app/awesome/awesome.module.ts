import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'create', component: AddComponent},
  {path: ':id', component: EditComponent}
];

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    EditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AwesomeModule {
}
