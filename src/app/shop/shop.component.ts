import { Component } from "@angular/core";
import { CategoryRepository } from "../model/category.repository";
import { ProductRepository } from "../model/product.repository";
import { Product } from "../model/product.model";
import { Category } from "../model/category.model";

@Component({
    selector: 'shop',
    templateUrl:'shop.component.html',
    styles: [`
        .pt-100 {padding-top:100px;}
        `]
})

export class ShopComponent {
    public selectedCategory: Category | null = null;
    public productPerPage = 3;
    public selectedPage = 1;


    constructor(
        private productRepository: ProductRepository,
        private categoryRepository: CategoryRepository) {}

    get products(): Product[] {
       let index = (this.selectedPage-1)*this.productPerPage
       return this.productRepository
            .getProducts(this.selectedCategory)
            .slice(index,index + this.productPerPage)
}

    get categories(): Category[]{
        return this.categoryRepository.getCategories();
    }
     changeCategory(newCategory?: Category | null) {
        this.selectedCategory = newCategory  ?? null;
        
    }
}