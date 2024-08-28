import { Injectable } from '@angular/core';
import { budgetType } from 'Interfaces/budgetType';
import { category } from 'Interfaces/category';
import { subcategory } from 'Interfaces/subcategory';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  categories?: Array<category>;
  subcategories?: Array<subcategory>;
  budgetType?: Array<budgetType>;
  constructor() {}

  async getCategories(): Promise<Array<category>> {
    const response = await fetch('https://api.kakeibo.pandacrp.com/category');
    const data = await response.json();
    return data;
  }

  async getSubCategories(): Promise<Array<subcategory>> {
    const response = await fetch(
      'https://api.kakeibo.pandacrp.com/subCategory'
    );
    const data = await response.json();
    return data;
  }

  async getBudgetType(): Promise<Array<budgetType>> {
    const data: Array<budgetType> = [
      { id: 1, typeName: 'Income', typeColor: '00FF00' },
      { id: 2, typeName: 'Outcome', typeColor: 'FF0000' },
    ];
    return data;
  }
}
