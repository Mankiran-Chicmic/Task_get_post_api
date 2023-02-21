import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators,ReactiveFormsModule } from '@angular/forms';
//import { name } from '../products';
import { UsersDataService } from '../services/users-data.service';
import {map} from 'rxjs'
import { Product } from '../products';
import { allProducts } from '../array';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit
{
  ngOnInit(): void {
    this.fetchProducts();
  }
 // allProducts:Product[]=[]

  //Validators.pattern('[a-zA-Z+$]')
  xForm=new FormGroup({
    user:new FormControl('',[Validators.required,Validators.minLength(1)]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })


  loginUser(loginDetail:any){
    console.log(loginDetail.name)
    const headers=new HttpHeaders({'myHeader':'pro'})
    this.http.post<{name:string}>('https://getpostapi-d2f56-default-rtdb.firebaseio.com/loginDetails.json',
    loginDetail,{headers:headers}).subscribe((res)=>{
       console.log(res)
    });
  }
 isFetchingData:boolean=false
   arr=allProducts
   fetchProducts(){
    this.isFetchingData=true
    this.http.get<{[key:string]:Product}>('https://getpostapi-d2f56-default-rtdb.firebaseio.com/loginDetails.json')
    .pipe(map((res)=>{
      const products=[]
      for(const key in res){
        if(res.hasOwnProperty(key)){
          products.push({...res[key], id:key})
        }
      }
      return products;
    }))
    .subscribe((products)=>{
      console.log(products)
      allProducts.push(products)
      this.isFetchingData=false;
    })
  }

  onProductsFetch(){
    this.fetchProducts()
  }
 
  get user()
  {
    return this.xForm.get('user')
  }
  get password()
  {
    return this.xForm.get('password')
  }


  constructor(private http:HttpClient){

    }
  
 
}
