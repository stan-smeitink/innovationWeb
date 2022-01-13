import { Component, OnInit } from '@angular/core';
import {AbsenceCoursesService} from "../../../../services/absence-courses.service";
import {EmployeesService} from "../../../../services/employees.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DossiersService} from "../../../../services/dossiers.service";

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


  constructor(private dossiers:DossiersService,private absenceCourses:AbsenceCoursesService, private employees:EmployeesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.employees.all().subscribe({
      next: (result: { employers: any;}) => {
        this.employeesArray = result['data'];
      },
      error: (err: { error: { message: string; }; }) => {

      }
    });

    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.fillForm(id);
    });
  }

  onSubmit(): void {
    const { start_at, employee_id,absence_percentage } = this.form;

    this.absenceCourses.store(start_at, employee_id, absence_percentage).subscribe({
      next: (data: { result: any }) => {
        this.router.navigate(['dossiers']);
      },
      error: (err: { error: { message: string; }; }) => {
        this.isSuccessful = false;
        this.errorMessage = '';
      }
    });
  }

  private fillForm(id) {
    if (id > 0) {
      this.dossiers.show(id).subscribe({
        next: (data: { result: any }) => {
          this.form.name = data['data']['name'];
          this.form.date_of_birth = data['data']['date_of_birth'];
          this.form.employer_id = data['data']['employer_id'];
          this.form.id = data['data']['id'];
        },
        error: (err: { error: { message: string; }; }) => {
          this.isSuccessful = false;
          this.errorMessage = '';
        }
      });
    }
  }
}
