import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrl: './gaming.component.css',
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
      trigger('fromTopp', [
      transition(':enter', [
        query('#topCont a', [
          style({ opacity: 0, transform: 'translateY(20cm)' }),
          stagger(300, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true }),
        
      ])
    ]),
    trigger('fromLeft1', [
        transition(':enter', [
          query('.totvid', [
            style({ opacity: 0, transform: 'translateX(-200px)' }),
            stagger(400, [
              animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
          ], { optional: true }),
          
        ])
      ])
    
  ,
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
              animate('500ms linear', style({ transform: 'translateY(0px)', opacity: 1 })) // Final state
            ])
          ],{optional:true})
        ])
      ])
    ]
})
export class GamingComponent {

}
