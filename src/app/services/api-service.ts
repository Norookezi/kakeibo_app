import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  categories?: Array<category>;
  constructor() { }

  async getCategories():Promise<Array<category>>{
    const response = await fetch("https://api.kakeibo.pandacrp.com/category");
    const data = await response.json();
    console.log(data)
    return data;
  }
}

export interface category    {
  "id": number,
  "name": string,
  "iconId": number,
  "color": string,
  "creationDate": string,
  "updateDate": string
}