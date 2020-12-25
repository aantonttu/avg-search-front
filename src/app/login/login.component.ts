import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.checkoutForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  onSubmit(userPassword) {
    console.log(userPassword);
    this.authService.login(userPassword)
      .pipe(first())
      .subscribe(
        () => {
          console.log('Login successful!');
        },
        error => {
          console.log('Login failed!');
          console.log(error);
        });
  }

}
