"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.pageTitle = '*****Product List******';
        this.imageWidth = 50;
        this.showImage = true;
        this.products = [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2016",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            }
        ];
    }
    ProductComponent.prototype.toogleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductComponent.prototype.ngOnInit = function () {
        console.log("<<<<<<<<<<<<<<<<<<init>>>>>>>>>>>>>>>>>>>>>");
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'edu-prod',
            templateUrl: 'app/products/product.component.html',
            //styles:['thead{color:blue;}','h3{color:green;}']
            styleUrls: ['app/products/product.component.css']
        })
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
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
//# sourceMappingURL=product.component.js.map