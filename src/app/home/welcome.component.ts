import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { ProductService } from '../products/product.service';
import { IProduct } from '../products/product';

@Component({
    templateUrl: './welcome.component.html',
    providers: [ProductService]
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    public vehicles :IProduct[];
    errorMessage : string;

    constructor(private _productService : ProductService){

    }

    ngOnInit(): void{
        console.log("In OnInIt");
        this._productService.getProducts().subscribe(
                products => {this.vehicles = products;
            },
            error => this.errorMessage = <any> error
        );
        console.log("Vehicles are:"+this.vehicles)
    }

    // addNewRequest(): void {
    //     this._router.navigate(['/products']);
    //   }
}
