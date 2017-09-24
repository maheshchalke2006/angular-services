import {Component,Inject} from "@angular/core"
import {CounterService} from './counter.service'

@Component({
    //providers:[CounterService], // This will restrict service to be call 
    selector: 'counter-user',
    template: `
        <b>Counter user</b>
         <p>
                Inital Value
                <input type="text" [(ngModel)]="v" />
                {{v}}
        </p>

        <button (click)="GetValue()">Get value</button>
    `
})

export class AppCounterUserComponent{
    GetValue(){
        console.log(this.contextService.Shared_initialValue);
    }    
        constructor(
                @Inject(CounterService)private contextService:CounterService
        ){
                console.log('AppComponent Created');
        }
}
