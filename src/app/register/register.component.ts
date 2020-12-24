import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {UserPassword} from '../user-password';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  checkoutForm;
  url = 'api/users/register';
  userPassword: UserPassword;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
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
      () => {
        console.log('Registration successful!');
        this.checkoutForm.reset();
      },
      error => {
        console.log('Registration failed!');
        console.log(error);
      }
    );
  }

}
