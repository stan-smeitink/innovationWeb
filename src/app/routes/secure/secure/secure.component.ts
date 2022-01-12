import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../../core/auth/token-storage.service";

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  user: string[] = [];

  constructor(public tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
  }
}
