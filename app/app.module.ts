import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component';
import {RobotComponent} from './robot.component'
import { ProductComponent } from './products/product.component';
import { ProductFilter } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { OrderComponent } from './orders/order.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { HomeComponent } from './home/home.component';
import { NotFound } from './shared/notFound.component';
import { ProductDetailGaurd } from './products/product-gaurd.service';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path:'products',component:ProductComponent},
            {path:'products/:id',canActivate:[ProductDetailGaurd],component:ProductDetailComponent},
            {path:'orders',component:OrderComponent},
            {path:'home',component:HomeComponent},
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'**',component:NotFound}
        ])
    ],
    declarations:[
        AppComponent,
        RobotComponent,
        ProductComponent,
        ProductFilter,
        StarComponent,
        OrderComponent,
        ProductDetailComponent,
        HomeComponent,
        NotFound
        
    ],
    providers:[
        ProductService,
        ProductDetailGaurd
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}