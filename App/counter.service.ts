import {Injectable} from '@angular/core';

@Injectable()
export class CounterService{
    constructor(){
        console.log('Counter Service created');
    }

    Shared_initialValue:number=5;
}

