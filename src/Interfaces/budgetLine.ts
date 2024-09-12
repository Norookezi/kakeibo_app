import { Subscribable } from 'rxjs';
import { Icategory } from './category';
import { Isubcategory } from './subcategory';
import { Ifrequencies } from './frequencies';

export interface IbudgetLine {
  id: number;
  userId: number;
  value: number;
  title: string;
  description: string | null;
  date: Date;
  type: string;
  frequencyId?: number | null;
  categoryId: number;
  subCategoryId: number | null;
  updateDate: Date;
  creationDate: Date;
  frequency?: Ifrequencies;
  category: Icategory;
  subCategory: Isubcategory;
}
