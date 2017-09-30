import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CounterService{
    constructor(){
        console.log('Counter Service created');
    }

    Shared_initialValue:number=5;

    AutoRefreshValueSubject = new Subject();

    SetValue(value:any){
        this.AutoRefreshValueSubject.next(value);
    }
}

