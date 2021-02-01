import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})


export class CreateEmployeeComponent implements OnInit {
  
 
  constructor(public EmployeeService : EmployeeService, private router: Router) {}
  
  ngOnInit(): void {
   this.listEmployess();
   if(this.router.url=='/employees/create') this.EmployeeService.employee = Object();
  }

  listEmployess(){
    this.EmployeeService.listEmployees().then(res => {
      this.EmployeeService.employees = res.data;
  })
}
async createOrUpdateEmployee(form: NgForm){
  try {
    const id = this.EmployeeService.employee.id;
    if(!id){
      await this.EmployeeService.createEmployee(form.value)
    }
    else await this.EmployeeService.updateEmployee(form.value, id)
   
    Swal.fire('Ok!','Guardado Exitoso','success')
    form.reset();
    console.log(this.EmployeeService.employee)
    this.router.navigateByUrl('/employees')


  } catch ({error}) {
    Swal.fire('Error!',`${error.error}`,'error')

  }

  
  
}





  
}
