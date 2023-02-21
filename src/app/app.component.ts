import { Component,OnInit } from '@angular/core';import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import {FormsModule,ReactiveFormsModule,FormControl,Validators,FormGroup} from '@angular/forms'
import { UsersDataService } from './services/users-data.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  users:any;
  title = 'TaskGetPostApi';
  // constructor(private userData:UsersDataService){
  //   userData.users().subscribe((data)=>{
  //    console.warn("data",data)
  //     this.users=data;
  //    //console.warn(this.users)
  //   })
  // }
  
}
