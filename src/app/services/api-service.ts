import { Injectable } from '@angular/core';
import { IbudgetLine } from 'Interfaces/budgetLine';
import { IbudgetType } from 'Interfaces/budgetType';
import { Icategory } from 'Interfaces/category';
import { Isubcategory } from 'Interfaces/subcategory';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  categories?: Array<Icategory>;
  subcategories?: Array<Isubcategory>;
  budgetType?: Array<IbudgetType>;
  constructor() {}

  async getCategories(): Promise<Array<Icategory>> {
    const response = await fetch('https://api.kakeibo.pandacrp.com/category');
    const data = await response.json();
    return data;
  }

  async getSubCategories(): Promise<Array<Isubcategory>> {
    const response = await fetch(
      'https://api.kakeibo.pandacrp.com/subCategory'
    );
    const data = await response.json();
    return data;
  }

  async getBudgetType(): Promise<Array<IbudgetType>> {
    const data: Array<IbudgetType> = [
      { id: 1, typeName: 'Income', typeColor: '00FF00' },
      { id: 2, typeName: 'Outcome', typeColor: 'FF0000' },
    ];
    return data;
  }

  async getBudgetLine(): Promise<Array<IbudgetLine>> {
    const response = await fetch(
      'https://api.kakeibo.pandacrp.com/budgetLines'
    );
    const data = await response.json();
    return data;
  }
}
