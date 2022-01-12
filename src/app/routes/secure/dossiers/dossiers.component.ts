import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../../services/employees.service";
import {DossiersService} from "../../../services/dossiers.service";

@Component({
  selector: 'app-dossiers',
  templateUrl: './dossiers.component.html',
  styleUrls: ['./dossiers.component.scss']
})
export class DossiersComponent implements OnInit {

  dossierArray = [];
  constructor(private dossier:DossiersService) { }

  ngOnInit(): void {
    this.dossier.all().subscribe({
      next: (result: { employers: any;}) => {
        this.dossierArray = result['data'];
      },
      error: (err: { error: { message: string; }; }) => {

      }
    });
  }


  public delete(id){
    this.dossier.delete(id).subscribe({
      next: (result: { employers: any;}) => {
        this.ngOnInit();
      },
      error: (err: { error: { message: string; }; }) => {
        console.log("Error");
      }
    });
  }

}
