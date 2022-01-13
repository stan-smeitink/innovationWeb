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
      next: (result: { employers: any;}) => {
        this.ngOnInit();
      },
      error: (err: { error: { message: string; }; }) => {
        console.log("Error");
      }
    });
  }

}
