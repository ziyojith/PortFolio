import { Component } from '@angular/core';
import { NodeitilityserviceService } from '../nodeitilityservice.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-store-projects',
  templateUrl: './store-projects.component.html',
  styleUrl: './store-projects.component.css'
})

export class StoreProjectsComponent {
name:string='';
id:string='';
url:string='';
detail:string='';
msg:any;
img:any;
constructor(private util:NodeitilityserviceService,private router:Router){
        
    }
onSubmit(form:any):void {
  this.util.insert(form.value.id,form.value.name,form.value.detail,form.value.url,form.value.img).subscribe((data)=>{
    if(data.status) this.msg=data.message
    
    
})


}
}
