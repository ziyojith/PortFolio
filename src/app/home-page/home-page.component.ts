import { Component, OnInit, Optional } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'], // Corrected from 'styleUrl' to 'styleUrls'
  animations: [
    trigger('fromRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }), 
        animate('600ms ease-out', style({ transform: 'translate(0%)', opacity: 1 }))
      ])
    ]),trigger('fromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }), 
        animate('1500ms ease-out', style({ transform: 'translate(0%)', opacity: 1 }))
      ])
    ]),
    trigger('fromTop', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }), 
        animate('1500ms ease-out', style({ transform: 'translate(0%)', opacity: 1 }))
      ])
    ]),
    trigger('fromBottom', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }), 
        animate('1500ms ease-out', style({ transform: 'translate(0%)', opacity: 1 }))
      ])
    ]),
    trigger('lettersAni', [
      transition(':enter', [
        query("span", [
          style({ transform: 'translateY(0)', opacity: 0 }), // Initial state of the letters
          stagger(100, [  // Delay for each letter's animation
            animate('3000ms linear', style({ transform: 'translateY(0px)', opacity: 1 })) // Final state
          ])
        ],{optional:true})
      ])
    ])
  ]
})
export class HomePageComponent implements OnInit {
  role:any[] = ['D','e','v','e','l','o','p','e','r']
  show = true
   ngOnInit(): void {
   }
  StartAction():void{
    this.show = true
  }
 }
