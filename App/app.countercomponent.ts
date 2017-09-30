import {Component,Input,Output,EventEmitter,Inject} from "@angular/core"
import {CounterService} from "./counter.service"

@Component({
    selector:'mycounter',
    template:`
        <h3> My Counter </h3>
        <input type="text" [(ngModel)] ="value"  (keypress)="SetValue()" />
        <button (click)="Add()" [disabled] = "value>=maxvalue">Click</button>
        Value {{value}} Minimum Value {{minvalue}} Maxvalue{{maxvalue}}

        <button (click)="SetValue()">Set value</button>
    `,    
    inputs:['maxvalue:maximumvalue'], // Another syntax to decorate input 
})

export class AppCounterComponent{

    SetValue(){     
        console.log('@@@@@');
        this.contextService.Shared_initialValue = 199;
        //console.log(this.contextService.Shared_initialValue);
        this.contextService.SetValue(this.value);
    }
    
    constructor(
            @Inject(CounterService)private contextService:CounterService
    ){
            console.log('AppComponent Created from counter component');
    }


    @Input('initialvalue') // As per guidelines use all small letters for variable names.
    value:number=0;

    @Input('minimumvalue')
    minvalue:number=0;

    //@Input('maximumvalue') // You can use alternet method to decorate in component
    maxvalue:number=0;

    @Output('counterchange')
    changeValue = new EventEmitter();

    Add(){
        this.value++;
        this.changeValue.emit("Counter value is "+this.value);
    }


}