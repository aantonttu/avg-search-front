import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserDetail} from '../user-detail';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  usersList: UserDetail[];
  url = 'api/users';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit(): void {
    this.getUsersData();
  }

  // tslint:disable-next-line:typedef
  getUsersData() {
    this.usersList = [];
    this.http.get<UserDetail[]>(this.url)
      .subscribe(data => {
        this.usersList = data;
      });
  }
  // tslint:disable-next-line:typedef
  onDeleteUser(id) {
    this.http.delete('api/users/' + id).subscribe();
  }
}
