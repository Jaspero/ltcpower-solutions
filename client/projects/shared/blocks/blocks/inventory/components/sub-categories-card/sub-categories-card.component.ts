import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Subcategories} from '@shared/interfaces/subcategories.interface';

@Component({
  selector: 'ltc-sub-categories-card',
  templateUrl: './sub-categories-card.component.html',
  styleUrls: ['./sub-categories-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubCategoriesCardComponent {
  @Input() subCategories: Subcategories;

}
