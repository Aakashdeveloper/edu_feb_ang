import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RobotComponent} from './robot.component'
import { ProductComponent } from './products/product.component';

@NgModule({
    imports:[
        BrowserModule
    ],
    declarations:[
        AppComponent,
        RobotComponent,
        ProductComponent
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}