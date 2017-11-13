import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './secure-input/input.component';
import { ClarityModule } from 'clarity-angular';
import { InputRefDirective } from './secure-input/input-ref.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        InputComponent,
        InputRefDirective
    ],
    imports: [
        BrowserModule,
        CommonModule,
        ClarityModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
