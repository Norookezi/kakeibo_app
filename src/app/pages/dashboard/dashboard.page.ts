import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api-service';
import { IbudgetType } from 'Interfaces/budgetType';
import { Icategory } from 'Interfaces/category';
import { Isubcategory } from 'Interfaces/subcategory';
import { IbudgetLine } from 'Interfaces/budgetLine';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  categories: Array<Icategory> = [];
  subCategories: Array<Isubcategory> = [];
  budgetType: Array<IbudgetType> = [];
  budgetLine: Array<IbudgetLine> = [];
  isModalOpen = false;

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    this.categories = await this.apiService.getCategories();

    this.subCategories = await this.apiService.getSubCategories();

    this.budgetType = await this.apiService.getBudgetType();

    this.budgetLine = await this.apiService.getBudgetLine();
  }
  //ici la logique pour récuperer les données (catégorie, subcategorie etc..)

  openModal() {
    this.isModalOpen = true;
    console.log(true);
  }

  closeModal() {
    this.isModalOpen = false;
    console.log(false);
  }
}
