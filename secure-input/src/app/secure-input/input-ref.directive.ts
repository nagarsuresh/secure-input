import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
    selector: 'si-input input'
})
export class InputRefDirective {

    private _type = 'text';

    constructor(private elementRef: ElementRef) {
        console.log('input ref applied');
    }

    @HostBinding('attr.type')
    public get inputType() {
        return this._type;
    }

    public set inputType(type) {
        this._type = type;
        this.setFocus();
    }

    private setFocus() {
        this.elementRef.nativeElement.focus();
    }



}
