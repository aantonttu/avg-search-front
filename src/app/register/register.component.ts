import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../user.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  checkoutForm;
  log: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
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
    this.userService.register(userPassword)
      .pipe(first())
      .subscribe(
        () => {
          console.log('Registration successful');
          this.log = 'success';
        },
        error => {
          console.log('Registration failed!');
          console.log(error);
          this.log = 'error';
        });
  }
}
