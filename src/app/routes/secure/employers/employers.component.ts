import {Component, OnInit} from '@angular/core';
import {EmployersService} from "../../../services/employers.service";

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.scss']
})
export class EmployersComponent implements OnInit {

  constructor(private employers:EmployersService) {
  }

  ngOnInit(): void {
    this.employers.all().subscribe({
      next: (data: { employers: any;}) => {

      },
      error: (err: { error: { message: string; }; }) => {

      }
    });
  }

}
