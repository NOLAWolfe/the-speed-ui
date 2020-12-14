import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/shared/service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;



  constructor(private _formBuilder: FormBuilder, private service: UserService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      username: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      password: ['', Validators.required]
    });
  }


}
