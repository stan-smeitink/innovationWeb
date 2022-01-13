import { Component, OnInit } from '@angular/core';
import {AbsenceCoursesService} from "../../../../services/absence-courses.service";
import {EmployeesService} from "../../../../services/employees.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: any = {
    start_at: null,
    employee_id: null,
    absence_percentage: null,
    type_id: null
  };
  isSuccessful = false;
  errorMessage = '';
  employeesArray = [];


  constructor(private absenceCourses:AbsenceCoursesService, private employees:EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.employees.all().subscribe({
      next: (result: { employers: any;}) => {
        this.employeesArray = result['data'];
      },
      error: (err: { error: { message: string; }; }) => {

      }
    });
  }

  onSubmit(): void {
    const { start_at, employee_id,absence_percentage } = this.form;

    this.absenceCourses.store(start_at, employee_id, absence_percentage).subscribe({
      next: (data: { result: any }) => {
        this.router.navigate(['dossiers']);
      },
      error: (err: { error: { message: string; }; }) => {
        this.isSuccessful = true
        this.errorMessage = '';
      }
    });
  }
}
