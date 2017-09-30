//app.mycomponent.ts

//Decoretor 
import {Component,Input,Output,Inject} from '@angular/core'
import {CounterService} from './counter.service'



@Component({
        selector:'myapp',
        template:`
                <mycounter [initialvalue]="v" minimumvalue=0 maximumvalue=16
                (counterchange)="DisplayData($event)"
                
                >Loading</mycounter>
                <p>
                        Inital Value
                        <input type="text" [(ngModel)]="v" />
                        {{v}}
                </p>

                <counter-user></counter-user>                
                
        `
})

export class AppMyComponent{
        constructor(
                @Inject(CounterService)private contextService:CounterService
        ){
                console.log('AppComponent Created');
        }

     DisplayData(data){
        console.log('clicked'+data);
        //this.contextService.Shared_initialValue
    }
}