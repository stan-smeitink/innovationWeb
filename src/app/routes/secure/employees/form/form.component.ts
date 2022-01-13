import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeesService} from "../../../../services/employees.service";
import {EmployersService} from "../../../../services/employers.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: any = {
    id: null,
    name: null,
    date_of_birth: null,
    employer_id: null
  };
  isSuccessful = false;
  errorMessage = '';
  employersArray = [];
  isUpdating = false;

  constructor(private employees: EmployeesService, private employers: EmployersService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.employers.all().subscribe({
      next: (result: { employers: any; }) => {
        this.employersArray = result['data'];
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
    const {id, name, date_of_birth, employer_id} = this.form;
    if (id > 0) {
      this.employees.update(id, name, date_of_birth, employer_id).subscribe({
        next: (data: { result: any }) => {
          this.router.navigate(['employees']);
        },
        error: (err: { error: { message: string; }; }) => {
          this.isSuccessful = false;
          this.errorMessage = '';
        }
      });
    } else {
      this.employees.store(name, date_of_birth, employer_id).subscribe({
        next: (data: { result: any }) => {
          this.router.navigate(['employees']);
        },
        error: (err: { error: { message: string; }; }) => {
          this.isSuccessful = false;
          this.errorMessage = '';
        }
      });
    }

  }

  private fillForm(id) {
    if (id > 0) {
      this.employees.show(id).subscribe({
        next: (data: { result: any }) => {
          this.form.name = data['data']['name'];
          this.form.date_of_birth = data['data']['date_of_birth'];
          this.form.employer_id = data['data']['employer_id'];
          this.form.id = data['data']['id'];
          this.isUpdating = true;
        },
        error: (err: { error: { message: string; }; }) => {
          this.isSuccessful = false;
          this.errorMessage = '';
        }
      });
    }
  }
}
