import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  ngOnInit(): void {
    
  }
  forms={
  name:'',
  msg:''
  }
  sendEmail():void {
    const serviceID = 'service_gjvc8co';
    const templateID = 'template_cn3rduk';
    const publicKey = 'n_3h_oT4YA49z7bty'; 
     emailjs.send(serviceID, templateID, this.forms, publicKey)
      .then(() => {
        alert('Email sent successfully!');
        this.forms = { name: '', msg: '' }; 
      })
      .catch(err => {
        console.error('Email send error:', err);
        alert('Failed to send email.');
      });
}
}
