import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api-service';
import { budgetType } from 'Interfaces/budgetType';
import { category } from 'Interfaces/category';
import { subcategory } from 'Interfaces/subcategory';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  categories: Array<category> = [];
  subCategories: Array<subcategory> = [];
  budgetType: Array<budgetType> = [];

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    this.categories = await this.apiService.getCategories();

    this.subCategories = await this.apiService.getSubCategories();

    this.budgetType = await this.apiService.getBudgetType();
  }
  //ici la logique pour récuperer les données (catégorie, subcategorie etc..)
}
