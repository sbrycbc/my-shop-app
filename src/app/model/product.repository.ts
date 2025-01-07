// servis dosyasina gidecek ve burdan product ile alakali metodlari cagiracak...

import { Injectable, OnInit } from '@angular/core';
import { Product } from './product.model';
import { RestService } from './rest.service';

@Injectable()
export class ProductRepository implements OnInit {
    private products: Product[] = [];

    constructor(private restService: RestService) { }
    
    ngOnInit() {
        this.restService
            .getProducts()
            .subscribe(products => this.products = products);
    }
    
    getProduct(id: number): Product {
        return this.products.find(i => i.id === id) || { id: 0, name: '', price: 0, imageUrl: '', description: '' };
    }

}
