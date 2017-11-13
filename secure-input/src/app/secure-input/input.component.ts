import { Component, ContentChild, OnInit } from '@angular/core';
import { InputRefDirective } from './input-ref.directive';

@Component({
    selector: 'si-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

    // holds the curernt type of field
    public type = 'text';

    // reference to the project input
    private _input: InputRefDirective;

    // the project input component
    @ContentChild(InputRefDirective)
    public set input(input: InputRefDirective) {
        this._input = input;
        this.setInputType();
    }
    public get input() {
        return this._input;
    }

    constructor() { }

    ngOnInit() {
    }

    toggleType() {
        this.type = (this.type === 'text') ? 'password' : 'text';
        this.setInputType();
    }
    copyContents() {
        console.log('copy not implemented');
    }

    private setInputType() {
        this.input.inputType = this.type;
    }
}
