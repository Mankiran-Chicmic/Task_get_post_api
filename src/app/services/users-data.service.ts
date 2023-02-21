import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
   url="https://console.firebase.google.com/u/0/project/oceanic-trail-335811/database/oceanic-trail-335811-default-rtdb/data/~2F";
  constructor(private http:HttpClient) { }
   users()
   {
    return this.http.get(this.url)
   }
   saveUsers(data:any)
   {
     return this.http.post(this.url,data)
   }
}
