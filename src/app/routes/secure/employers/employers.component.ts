import {Component, OnInit} from '@angular/core';
import {EmployersService} from "../../../services/employers.service";

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.scss']
})
export class EmployersComponent implements OnInit {
  employersArray = [];
  constructor(private employers:EmployersService) {
  }

  ngOnInit(): void {
    this.employers.all().subscribe({
      next: (result: { employers: any;}) => {
        this.employersArray = result['data'];
      },
      error: (err: { error: { message: string; }; }) => {

      }
    });
  }

  public show(id){
    console.log(id);
  }

  public delete(id){
    this.employers.delete(id).subscribe({
      next: (result: { employers: any;}) => {
        this.ngOnInit();
      },
      error: (err: { error: { message: string; }; }) => {
        console.log("Error");
      }
    });
  }

}
