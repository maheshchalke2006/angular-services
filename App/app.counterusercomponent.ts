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
    v:any
    GetValue(){
        console.log(this.contextService.Shared_initialValue);

        this.contextService
        .AutoRefreshValueSubject
        .subscribe((data)=>{
            console.log(data);  
            this.v=data;
        })
    }    

        constructor(
                @Inject(CounterService)private contextService:CounterService
        ){
                console.log('AppComponent Created');
        }
}
    