import { Component, OnInit } from '@angular/core';
import {EmployersService} from "../../../../services/employers.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: any = {
    name: null,
    street: null
  };
  isSuccessful = false;
  errorMessage = '';
  constructor(private employers:EmployersService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form);
    const { name, street } = this.form;

    this.employers.store(name, street).subscribe({
      next: (data: { result: any }) => {
        console.log(data);
        this.router.navigate(['employers']);
      },
      error: (err: { error: { message: string; }; }) => {
        this.isSuccessful = true
        this.errorMessage = '';
      }
    });
  }

}
