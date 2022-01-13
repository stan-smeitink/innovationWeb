import { Component, OnInit } from '@angular/core';
import {EmployersService} from "../../../../services/employers.service";
import {Router, ActivatedRoute} from "@angular/router";

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
  isCreating = true;
  employer = [];
  constructor(private employers:EmployersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.fillForm(id);
    });
  }

  onSubmit(): void {
    const {id, name, street } = this.form;
    if(id > 0){
      this.employers.update(id, name, street).subscribe({
        next: (data: { result: any }) => {
          this.router.navigate(['employers']);
        },
        error: (err: { error: { message: string; }; }) => {
          this.isSuccessful = false;
          this.errorMessage = '';
        }
      });
    }else{
      this.employers.store(name, street).subscribe({
        next: (data: { result: any }) => {
          this.router.navigate(['employers']);
        },
        error: (err: { error: { message: string; }; }) => {
          this.isSuccessful = false;
          this.errorMessage = '';
        }
      });
    }
  }

  private fillForm(id){
    if(id > 0){
      this.employers.show(id).subscribe({
        next: (data: { result: any }) => {
          this.form.name = data['data']['name'];
          this.form.street = data['data']['street'];
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
