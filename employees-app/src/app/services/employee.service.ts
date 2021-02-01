import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee} from '../interfaces/employee';
import { Response} from '../interfaces/response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiBase : string = `${environment.apiHost}/api/employee`;
  public employees: Employee[] = [];
  public employee: Employee = Object();

  constructor(private http: HttpClient) {}

  listEmployees(){
    return this.http.get<Response<Employee[]>>(`${this.apiBase}/all`).toPromise()
  }
  createEmployee(data: Employee){
    return this.http.post<Response<Employee[]>>(`${this.apiBase}/create`, data).toPromise()
  }
  updateEmployee(data: Employee, id:number){
    return this.http.put<Response<any>>(`${this.apiBase}/update/${id}`, data).toPromise()
  }
  destroyEmployee(id:number){
    return this.http.delete<Response<any>>(`${this.apiBase}/delete/${id}`).toPromise()

  }
}
