import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeitilityserviceService {

  constructor(private httpclient:HttpClient) {}
    url:string=" mongodb+srv://Jithin:beast@cluster0.ah3n25x.mongodb.net/PortFolio?retryWrites=true&w=majority";
   display():Observable<any>{
    return this.httpclient.get(this.url + 'getAll')
   }
   insert(id:string,name:string,detail:string,url:string,img:any):Observable<any>{
      return this.httpclient.get(this.url+ 'insert?id='+id+'&Name='+name+'&Detail='+detail+'&Link='+url+'&Image='+img)
   }

}
