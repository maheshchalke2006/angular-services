import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppMyComponent} from './app.mycomponent'
import {AppFormComponent} from './app.formcomponent'
import {AppModelFormComponent} from './app.modelformcomponent'
import {AppReactiveFormComponent} from './app.reactiveformcomponent'
import {AppCounterComponent} from './app.countercomponent'
import {AppCounterUserComponent} from './app.counterusercomponent'
import {CounterService} from './counter.service'


import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
    providers:[CounterService],
    declarations:[AppMyComponent
    ,AppFormComponent
    ,AppModelFormComponent
    ,AppReactiveFormComponent
    ,AppCounterComponent
    ,AppCounterUserComponent
    ],
    imports:[BrowserModule,FormsModule,ReactiveFormsModule],
    bootstrap:[AppMyComponent]
})

export class MyModule{
    
}