import { Component,NgModule } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import{HttpClient,HttpClientModule} from '@angular/common/http';
import {Subscription} from 'rxjs'; 


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  public data:Array<any>;
 
  result;
  constructor(){};
  
   

    userprofileForm=new FormGroup({
    uid:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    email_id:new FormControl('',Validators.required),
    age:new FormControl(''),
    phone_no:new FormControl(''),
    city:new FormControl(''),
    state:new FormControl(''),
    country:new FormControl(''),
    pincode:new FormControl(''),
    gender:new FormControl(''),
    password:new FormControl('',Validators.required),
    confirmpass:new FormControl('',Validators.required)

  })
/*

  
*/
}
