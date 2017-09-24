import {Component} from "@angular/core"
import {NgForm} from "@angular/forms"

//ngForm, ngSubmit, ngModel
@Component({
    selector:'myform',
    template:`
        <h3>Simple Forms</h3>
        <form (submit)="SaveData(reg)" #reg="ngForm">
            <!-- Input type text -->

                Input type text 
                <input type="text" name="firstname" ngModel 
                required 
                pattern='[a-z]*'
                minlength="2"
                maxlength="6"
                #val_firstname="ngModel"
                />
                <div *ngIf="val_firstname.errors">    
                    <span *ngIf="val_firstname.errors.required">Please enter first name </span>
                    <span *ngIf="val_firstname.errors.pattern">Pattern </span>
                    <span *ngIf="val_firstname.errors.minlength">Minimum Length </span>
                    <span *ngIf="val_firstname.errors.maxlength">Maximum Length </span>
                </div>

            <p>
                Gender<br />
                Male <input type="radio" name="gender" value="Male" ngModel />
                No <input type="radio" name="gender" value="Female" ngModel />
            </p>
            <p>
                Language: 
                Marathi<input type="checkbox" name="marathi" ngModel />
                English<input type="checkbox" name="english" ngModel />
                Hindi<input type="checkbox" name="hindi" ngModel />
            </p>                        
            <p>
                File
                <input type="file" name="photo" ngModel />
            </p>            

            <input type="submit" [disabled]="reg.invalid">
        </form>
        {{reg.value|json}}
        <p>dirty: {{reg.dirty}}</p>
        <p>touched: {{reg.touched}}</p>
        <p>pristine: {{reg.pristine}}</p>
        <p>valid: {{reg.valid}}</p>
        <p>invalid: {{reg.invalid}}</p>
        <p>{{val_firstname.errors|json}}</p>
    `
})

export class AppFormComponent{
    public SaveData(frm:NgForm){
        console.log('Form submited');
        console.log('value - '+frm.value);
        console.log('dirty - '+frm.dirty);
        console.log('touched - '+frm.touched);
        console.log('pristine - '+frm.pristine);
        console.log('valid - '+frm.valid);
        console.log('invalid - '+frm.invalid);

    }
}
