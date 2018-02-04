import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'

import {AppComponent} from './app.component';
import {RobotComponent} from './robot.component'
import { ProductComponent } from './products/product.component';
import { ProductFilter } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations:[
        AppComponent,
        RobotComponent,
        ProductComponent,
        ProductFilter,
        StarComponent
    ],
    providers:[
        ProductService
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}