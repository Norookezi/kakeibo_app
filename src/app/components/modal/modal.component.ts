import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { FormHelper, Inputs } from 'FormHelper';
import { FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@services/api-service';
import { DropdownEntry } from '@component/inputs/input/input.component';
import { Icategory } from 'Interfaces/category';
import { Isubcategory } from 'Interfaces/subcategory';
import { IbudgetType } from 'Interfaces/budgetType';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() submitExpense = new EventEmitter<any>();

  @Input() Categories: Array<Icategory> = [];
  @Input() SubCategories: Array<Isubcategory> = [];
  @Input() BudgetType: Array<IbudgetType> = [];

  categories: { [key: string]: DropdownEntry } = {
    'Sélectionnez une catégorie': {
      value: 'default',
      selected: true,
      disabled: true,
    },
  };

  subcategories: { [key: string]: DropdownEntry } = {
    'Sélelectionnez une sous catégorie': {
      value: 'default',
      selected: true,
      disabled: true,
    },
  };

  budgetType: { [key: string]: DropdownEntry } = {
    'Sélectionnez le type de dépense': {
      value: 'default',
      selected: true,
      disabled: true,
    },
  };

  formModal: Array<Inputs> = [
    {
      name: 'value',
      placeholder: 'Value',
      type: 'number',
      validators: [Validators.required],
    },
    {
      name: 'title',
      placeholder: 'Title',
      type: 'text',
      validators: [Validators.required],
    },
    {
      name: 'description',
      placeholder: 'Description',
      type: 'text',
      validators: [Validators.maxLength(500)],
    },
    {
      name: 'categorie',
      placeholder: 'categorie',
      type: 'dropdown',
      validators: [],
      value: this.categories,
    },
    {
      name: 'Subcategorie',
      placeholder: 'Subcategorie',
      type: 'dropdown',
      validators: [],
      value: this.subcategories,
    },
    {
      name: 'budgetType',
      placeholder: 'budgetType',
      type: 'dropdown',
      validators: [],
      value: this.budgetType,
    },
  ];

  modalForm: FormGroup = new FormGroup(FormHelper.makeForm(this.formModal));

  constructor(private apiService: ApiService) {}
  async ngOnInit() {
    (await this.apiService.getCategories()).forEach((category: Icategory) => {
      this.categories[category.name] = {
        value: category.id + '',
      };
    });

    (await this.apiService.getSubCategories()).forEach(
      (subcategory: Isubcategory) => {
        this.subcategories[subcategory.name] = {
          value: subcategory.id + '',
        };
      }
    );

    (await this.apiService.getBudgetType()).forEach(
      (budgetType: IbudgetType) => {
        this.budgetType[budgetType.typeName] = {
          value: budgetType.id + '',
        };
      }
    );
  }

  close() {
    this.closeModal.emit();
  }

  onSubmit($event: Event) {
    $event.preventDefault();
    console.log('Tentative de soumission du formulaire');
    if (this.modalForm.valid) {
      this.submitExpense.emit(this.modalForm.getRawValue());
      console.log('Formulaire soumis:', this.modalForm.getRawValue());
      this.close(); // Fermer la modal après la soumission
    } else {
      this.closeModal.emit();
      console.log("Le formulaire n'est pas valide");
    }
  }
}
