import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EmployeesService} from "../../../../services/employees.service";
import {EmployersService} from "../../../../services/employers.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: any = {
    name: null,
    date_of_birth: null,
    employer_id: null
  };
  isSuccessful = false;
  errorMessage = '';
  employersArray = [];

  constructor(private employees:EmployeesService,private employers:EmployersService, private router: Router) { }

  ngOnInit(): void {
    this.employers.all().subscribe({
      next: (result: { employers: any;}) => {
        this.employersArray = result['data'];
      },
      error: (err: { error: { message: string; }; }) => {

      }
    });
  }

  onSubmit(): void {
    const { name, date_of_birth, employer_id } = this.form;

    this.employees.store(name, date_of_birth, employer_id ).subscribe({
      next: (data: { result: any }) => {
        this.router.navigate(['employees']);
      },
      error: (err: { error: { message: string; }; }) => {
        this.isSuccessful = true
        this.errorMessage = '';
      }
    });
  }


}
