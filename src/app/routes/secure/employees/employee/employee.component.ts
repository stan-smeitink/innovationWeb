import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../../../services/employees.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DossiersService} from "../../../../services/dossiers.service";
import {AbsenceCoursesService} from "../../../../services/absence-courses.service";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {
  chosenDossier: number = 0;
  public employee = [];
  public dossiers = [];
  public dossier = [];
  public absenceCourses = [];

  constructor(private employees:EmployeesService,
              private dossierService:DossiersService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private absenceCourseService: AbsenceCoursesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.getEmployee(id);
      this.getDossiers(id);
    });
  }

  private getEmployee(id){
    if(id > 0){
      this.employees.show(id).subscribe({
        next: (data: { result: any }) => {
          this.employee = data['data'];
        },
        error: (err: { error: { message: string; }; }) => {

        }
      });
    }
  }

  private getDossiers(id){
    if(id > 0){
      this.employees.dossiers(id).subscribe({
        next: (data: { result: any }) => {
          this.dossiers = data['data'];
        },
        error: (err: { error: { message: string; }; }) => {

        }
      });
    }
  }

  public getAbsenceCourse(dossierId){
    this.dossierService.show(dossierId).subscribe({
      next: (data: { result: any }) => {
        this.dossier = data['data'];
        this.absenceCourses = data['data']['absence_courses'];
      },
      error: (err: { error: { message: string; }; }) => {

      }
    });
  }

  public deleteAbsence(id){
    this.absenceCourseService.delete(id).subscribe({
      next: (data: { result: any }) => {
        // this.getAbsenceCourse();
      },
      error: (err: { error: { message: string; }; }) => {

      }
    });
  }

}
