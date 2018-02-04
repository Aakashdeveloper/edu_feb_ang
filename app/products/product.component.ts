import {Component,OnInit} from '@angular/core';
import {IProduct} from './products';
import {ProductService} from './product.service';

@Component({
    selector:'edu-prod',
    templateUrl:'app/products/product.component.html',
    //styles:['thead{color:blue;}','h3{color:green;}']
    styleUrls:['app/products/product.component.css']
    
})

export class ProductComponent implements OnInit{
    pageTitle:string='*****Product List******';
    ratingValue:string
    filterText:string;
    imageWidth:number=50;
    showImage:boolean=true;
    products:IProduct[];
    errorMessage:string;

    constructor(private _productService:ProductService){

    }
    toogleImage():void{
        this.showImage = !this.showImage
    }

    ngOnInit():void{
       this._productService.getProducts()
            .subscribe(products =>this.products = products,
                    error=> this.errorMessage=<any>error)
    }

    onRatingClicked(message:string): void{
        this.ratingValue =message
    }
}

/*
function add(a){
    return a+a
}
var add =(a)=>{
    return a+a
} 
One Way
--data banding {{}}
--property binding []
--event binding ()
Two Way [()]
*/
