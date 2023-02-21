import { Component } from '@angular/core';
import { Product } from '../products';
import { Comp1Component } from '../comp1/comp1.component';
import {HttpClient} from '@angular/common/http'
import { UsersDataService } from '../services/users-data.service';
import { allProducts } from '../array';
import { map } from 'rxjs';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component 
{
  constructor(private http:HttpClient){}
  arr=allProducts;
  delete(id:any)
  {
     this.http.delete('https://getpostapi-d2f56-default-rtdb.firebaseio.com/loginDetails/'+id+'.json')
     .subscribe((res)=>{
      console.log(res)
     });
  }
 
  isFetchingData:boolean=false
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
}
