import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../core/auth/token-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public token:TokenStorageService) {

  }

  ngOnInit(): void {
  }

}
