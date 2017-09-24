import {Component} from "@angular/core"
import {NgForm,FormGroup,FormControl,Validators} from "@angular/forms"

@Component({
    selector:'myreactiveform',
    template:`
            <h3> My Reactive Form </h3>
            <form (submit)="SaveData()" [formGroup]="reg" >
                <p>
                    <input type="text" 
                    [formControl]="reg.controls['firstname']" />
                </p>
                <p>
                    <input type="text" 
                    [formControl]="reg.controls['lastname']" />
                </p>                
                <p>
                    <input type="submit">
                    Show data <input type="button" (click)="SaveData()" value="Show Data">
                </p>
            </form>
            Errors {{reg.controls['firstname'].errors|json}}
    `
})

export class AppReactiveFormComponent{
    reg = new FormGroup({
        firstname :new FormControl('test',
        Validators.compose([
            Validators.required,
            Validators.minLength(2)
        ])
        ),
        lastname : new FormControl(),
    })

    public SaveData(){
            this.reg.controls['firstname'].setValue('new value');
            this.reg.controls['lastname'].setValue('new value');
            this.reg.setValue({'firstname':'test1233','lastname':'test123'})
            
    }
}
