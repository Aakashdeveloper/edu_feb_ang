import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import {AppComponent} from './app.component';
import {RobotComponent} from './robot.component'
import { ProductComponent } from './products/product.component';
import { ProductFilter } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule
    ],
    declarations:[
        AppComponent,
        RobotComponent,
        ProductComponent,
        ProductFilter,
        StarComponent
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}