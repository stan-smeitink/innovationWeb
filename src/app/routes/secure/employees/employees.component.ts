import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../../services/employees.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  public employeesArray = [];
  constructor(private employees:EmployeesService) { }
  isSuccessful = false;
  successMessage = '';
  errorMessage = '';

  ngOnInit(): void {
    this.employees.all().subscribe({
      next: (result: { employers: any;}) => {
        this.employeesArray = result['data'];
      },
      error: (err: { error: { message: string; }; }) => {

      }
    });
  }

  public show(id){

  }

  public delete(id){
    this.employees.delete(id).subscribe({
      next: (result: { message: any;}) => {
        this.successMessage = result.message;
        this.ngOnInit();
        this.removeMessages();
      },
      error: (err: { error: { message: string; }; }) => {
        this.errorMessage = err.error.message;
        this.removeMessages();
      }
    });
  }

  public removeMessages(){
    setTimeout(()=>{
      this.successMessage = '';
      this.errorMessage = '';
    }, 1500);
  }
}
