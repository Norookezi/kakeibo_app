import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api-service';
import { category } from 'Interfaces/category';
import { subcategory } from 'Interfaces/subcategory';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage  implements OnInit {
  categories: Array<category> = [];
  subCategories: Array<subcategory> = [];


  constructor(private apiService: ApiService) {}
  
  async ngOnInit() {
    this.categories = await this.apiService.getCategories();

    this.subCategories = await this.apiService.getSubCategories();
  }
//ici la logique pour récuperer les données (catégorie, subcategorie etc..)
}
