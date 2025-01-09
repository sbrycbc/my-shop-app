import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{

  public selectedCategory: Category | null = null;
  @Output() category = new EventEmitter<Category| undefined | null>();

  constructor(
       private categoryRepository: CategoryRepository
    ) { }
  
  ngOnInit() {
  }

  get categories(): Category[]{
      return this.categoryRepository.getCategories();
  }
  
  changeCategory(newCategory?: Category | null) {
    this.selectedCategory = newCategory ?? null;
    this.category.emit(newCategory ) ;
        
    }

}
