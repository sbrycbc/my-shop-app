// servis dosyasina gidecek ve burdan category ile alakali metodlari cagiracak...

import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';
import { RestService } from './rest.service';

@Injectable()
export class CategoryRepository implements OnInit {
    private categories: Category[] = [];

    constructor(private restService: RestService) {
        this.restService
            .getCategory()
            .subscribe(categories => this.categories = categories);
     }
    
    ngOnInit() {
        
    }
    
    getCategory(id: number): Category {
        return this.categories.find(i => i.id === id) || { id: 0, name: '' };
    }

    getCategories(): Category[]{
        return this.categories;
    }

}
