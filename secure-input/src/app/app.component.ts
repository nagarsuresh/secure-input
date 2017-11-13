import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    public formGroup: FormGroup;
    public formContents = '';
    constructor(private fb: FormBuilder) {
        this.formGroup = this.fb.group({
            'myinput': ['']
        });
        this.formGroup.valueChanges.subscribe(value => {
            this.formContents = JSON.stringify(value);
        });
    }


}
