import {Component, OnInit} from '@angular/core';
import {UserPassword} from '../user-password';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm;
  url = 'api/users/login';
  userPassword: UserPassword;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
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
    this.http.post(this.url,
      {
        username: userPassword.username,
        password: userPassword.password
      }
    ).subscribe(
      success => {
        console.log('Login successful!');
        console.log(success);
        this.checkoutForm.reset();
      },
      error => {
        console.log('Login failed!');
        console.log(error);
      }
    );
  }

}
