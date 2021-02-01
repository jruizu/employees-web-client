import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';

const routes: Routes = [
  {path: 'employees', component: ListEmployeesComponent},
  {path: 'employees/create', component: CreateEmployeeComponent},
  {path: 'employees/edit', component: CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
