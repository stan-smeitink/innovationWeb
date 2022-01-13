import {Component, OnInit} from '@angular/core';
import {DossiersService} from "../../../../services/dossiers.service";
import {DossierStatusesService} from "../../../../services/dossier-statuses.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dossier-form',
  templateUrl: './dossier-form.component.html',
  styleUrls: ['./dossier-form.component.scss']
})
export class DossierFormComponent implements OnInit {
  form: any = {
    start_at: null,
    employee_id: null,
    absence_percentage: null,
    type_id: null
  };
  isSuccessful = false;
  errorMessage = '';
  dossierStatusesArray = [];


  constructor(private dossiers: DossiersService, private dossierStatuses: DossierStatusesService, private router: Router, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.dossierStatuses.all().subscribe({
      next: (result: { employers: any;}) => {
        this.dossierStatusesArray = result['data'];
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
    const {id, start_at, end_at, dossier_status_id,employee_id } = this.form;

    this.dossiers.update(id, dossier_status_id,start_at,end_at, employee_id).subscribe({
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
          console.log(data);
          this.form.start_at = data['data']['start_at'];
          this.form.end_at = data['data']['end_at'];
          this.form.employee_id = data['data']['employee_id'];
          this.form.dossier_status_id = data['data']['dossier_status_id'];
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
