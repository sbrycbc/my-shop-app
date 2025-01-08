// servis dosyasina gidecek ve burdan product ile alakali metodlari cagiracak...

import { Injectable, OnInit } from '@angular/core';
import { Product } from './product.model';
import { RestService } from './rest.service';
import { Category } from './category.model';

@Injectable()
export class ProductRepository implements OnInit {
    private products: Product[] = [];

    constructor(private restService: RestService) { 
         this.restService
            .getProducts()
            .subscribe(products => this.products = products);
    }
    
    ngOnInit() {
       
    }
    
    getProduct(id: number): Product {
        return this.products.find(i => i.id === id) || { id: 0, name: '', price: 0, imageUrl: '', description: '' };
    }

  getProducts(category: Category | null | undefined): Product[] {
    if (category)
        return this.products.filter(p => p.category == category.name);
    else
        return this.products; // Null veya undefined olduğunda tüm ürünleri döndür
}


}
