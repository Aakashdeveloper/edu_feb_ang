import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductFilter } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { ProductDetailGaurd } from './product-gaurd.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports:[   
        SharedModule,
        RouterModule.forChild([
            {path:'products',component:ProductComponent},
            {path:'products/:id',canActivate:[ProductDetailGaurd],component:ProductDetailComponent},
        ])
    ],
    declarations:[
        ProductComponent,
        ProductFilter,
        ProductDetailComponent
    ],
    providers:[
        ProductService,
        ProductDetailGaurd
    ]

})

export class ProductModule{

}