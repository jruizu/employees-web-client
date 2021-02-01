import { Component, OnInit} from '@angular/core';
import { Employee } from '../interfaces/employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})


export class ListEmployeesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'identification', '_function', 'boss', 'actions'];
  constructor(public EmployeeService : EmployeeService, private router: Router) {}
  
  ngOnInit(): void {
   this.listEmployess();
  }

  listEmployess(){
    this.EmployeeService.listEmployees().then(res => {
      this.EmployeeService.employees = res.data;
  })
}
  editEmployee(employee: Employee){
    
    this.EmployeeService.employee = employee;
    this.router.navigateByUrl('/employees/edit')
  }
   deleteEmployee(id:number){
    Swal.fire({
      title: 'Seguro deseas eliminar este empleado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then(async (result)  => {
      if (result.isConfirmed) {
        await this.EmployeeService.destroyEmployee(id)
        Swal.fire('Eliminado!','Este empleado fue borrado de la lista.','success')
        this.listEmployess();
      
      }
    })
      

   
  }
}
