import {Component, OnInit} from '@angular/core';
import {AuthService, User} from '../../../core/auth/auth.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  user: User;

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.getUser()
      .subscribe(
        result => {
          console.log('success get user');
          console.log(result);
          this.user = result;
        },
        err => {
          console.log('error user:');
          console.log(err);
        });
  }
}
