import { Component, OnInit } from '@angular/core';
import { ApiService, category } from '@services/api-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage  implements OnInit {
  categories: Array<category> = []

  constructor(private apiService: ApiService) {}
  
  async ngOnInit() {
    this.categories = await this.apiService.getCategories();
  }
//ici la logique pour récuperer les données (catégorie, subcategorie etc..)
}
