import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
    templateUrl:'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
    title:string='Product Detail ';
    name:string;
    imgUrl:string
    desc:string

    constructor(private _route:ActivatedRoute,
                private _router:Router){}

    ngOnInit():void{
        let id= +this._route.snapshot.params['id']
        this.title += `:${id}`

        this._route
            .queryParams
            .subscribe(params=>{
                this.name = params['name']
                this.imgUrl = params['imgUrl']
                this.desc = params['desc']
            })
    }


    onBack():void{
        this._router.navigate(['/products'])
    }
}